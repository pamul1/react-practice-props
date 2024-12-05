import { useState } from "react"

export const ProductCard = ({ product }) => {

    return (
        <div>
            {product.map((product) => {
                <div key={product.name} className="card m-5">
                    <div className="card-header">{product.name}</div>
                    <div className="card-body">{product.price}</div>
                    <div className="card-footer">{product.stock}</div>
                </div>
            })}
        </div>
    )
}