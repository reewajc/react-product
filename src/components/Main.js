import React, { useState, useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'


const Main = ({ selectedproduct, productListData }) => {
    const [activeproduct, setActiveproduct] = useState(productListData[selectedproduct])

    useEffect(() => {
        setActiveproduct(productListData[selectedproduct])
    }, [productListData, selectedproduct])

    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='productHighlight'>
                    <div className='productContainer'>
                        <img
                            className='selectedproduct'
                            src={activeproduct.image}
                            alt=''
                        />
                    </div>
                    <div className='loginButton'>
                        Buy
                    </div>
                </div>

                <div className='productDetails'>
                    <div className='title'>
                        <h2>{activeproduct.title}</h2>
                        <p className='itemNumber'>${activeproduct.price}</p>
                    </div>

                    <div className='owner'>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div>{activeproduct.description}</div>

                            </div>
                            <div className='ownerLink'>
                                <img src={instagramLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={twitterLogo} alt='' />
                            </div>
                            <div className='ownerLink'>
                                <img src={moreIcon} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
