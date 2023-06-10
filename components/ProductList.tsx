import React from 'react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
      {products.map((product) => (
        <div key={product.id} className="relative flex flex-col">
          <img
            className="w-full object-cover flex-shrink-0 border border-black hover:border-[#5FFF37]"
            src={product.image}
            alt={`Product: ${product.title}`}
            style={{cursor: 'pointer'}}
          />
          <div className="absolute mt-4 flex justify-between bottom-0 left-0 p-2">
            <div className='flex '>
              <h3 className="text-xs text-gray-700 font-mono">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.title}
              </h3>
            </div>
          </div>
          <div className="absolute mt-4 flex justify-between bottom-0 right-0 p-2">
            <div className='flex '>
              <p className="text-xs font-mono font-medium text-gray-900 justify-end items-end  ">${product.price} →</p>
            </div>
          </div>
        </div>


      ))
      }
    </div >


  )
}

export default ProductList
