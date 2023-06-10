import { createContext, useState, FC, ReactNode } from "react";
import { productsArray, getProductData } from "./ProductData";

interface Product {
  id: number;
  quantity: number;
}

interface CartContextType {
  items: Product[];
  getProductQuantity: (id: number) => number;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
});

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

  function getProductQuantity(id: number): number {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id: number): void {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id: number): void {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id: number): void {
    setCartProducts(cartProducts.filter((currentProduct) => currentProduct.id != id));
  }

  function getTotalCost(): number {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData!.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue: CartContextType = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
