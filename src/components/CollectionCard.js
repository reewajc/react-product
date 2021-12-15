import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'
//import image from 

const CollectionCard = ({  name, image }) => {
    return (
        <div className='collectionCard'>
                <img className='collectionCardImage' src={image} alt='' />      
                <div className='name'>
                    {name} 
                </div>        
        </div>
    )
}

export default CollectionCard
