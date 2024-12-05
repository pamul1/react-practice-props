import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ProductCard } from './Component/ProductCard'

function App() {
  const product = [
    { name: "Television", price: "$900", stock: "In Stock" },
    { name: "Cd Player", price: "$500", stock: "In Stock" },
    { name: "Mirror", price: "$200", stock: "Out of Stock" },
    { name: "Laptop", price: "$1200", stock: "In Stock" },
    { name: "Ipad", price: "$1000", stock: "Out of Stock" },
    { name: "Headphones", price: "$150", stock: "In Stock" },
    { name: "Camera", price: "$1500", stock: "In Stock" },
    { name: "Smartphone", price: "$800", stock: "Out of Stock" },
    { name: "Game", price: "$700", stock: "Out of Stock" },
    { name: "Bike", price: "$2000", stock: "Out of Stock" },
];


  return (
    <div className='product'>
      <ProductCard product={product} name="All Names"/>
     
    </div>
  )
}

export default App