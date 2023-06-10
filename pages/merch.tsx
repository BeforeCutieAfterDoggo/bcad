import React from 'react'
import ProductList from '../components/ProductList'

const products = [
    {
        id: 1,
        title: 'TRIP BOOK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 15,
        image: '/products/tripBook.png',
    },
    {
        id: 2,
        title: 'INSTAGRAM MAT',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 20,
        image: '/products/instagramMat.png',
    },
    {
        id: 3,
        title: 'BEGONE COMPUTER BUGS STICKER',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        price: 2,
        image: '/products/talisman.png',
    },
]

const MerchPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <ProductList products={products} />
        </div>
    )
}

export default MerchPage
