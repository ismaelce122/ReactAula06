import React from 'react'

const products = [
    {id: 1, name: 'produto 01', price: 10},
    {id: 2, name: 'produto 02', price: 20},
    {id: 3, name: 'produto 03', price: 30}
]

function ProductList({addToCart}) {
    return (
        <div>
            <h2>Produtos:</h2>
            <ul>
                {products.map((product) => {
                    <li key={product.id}>
                        {product.name} - R${product.price}
                        <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductList