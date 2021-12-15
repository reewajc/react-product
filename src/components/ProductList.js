import React from 'react'
import CollectionCard from './CollectionCard'
import './ProductList.css'

const ProductList = ({ productListData, setSelectedProduct }) => {
    return (
        <div className='productList'>
            {productListData.map(product =>(
                <div onClick={() => setSelectedProduct(product.id-1)}>
                    <CollectionCard
                        key={product.id}
                        name={product.title}
                        rating={product.rating.rate}
                        image={product.image}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductList
