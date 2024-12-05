import { useState } from "react"

export const ProductCard = ({product}) => {
   
   
    return (
        <div>
            <ul>
                {products.map((product) => (<li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </li>
                ))}
            </ul>
        </div>
    )


}