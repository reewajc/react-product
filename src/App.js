import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList'
import Main from './components/Main';

function App() {
  const [productListData, setProductListData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(0)

  useEffect (() => {
    const getMyNfts = async () => {
      const productData = await axios.get(
        'https://fakestoreapi.com/products'
       
      )

      setProductListData(productData.data)
      
    }
    return getMyNfts()
 }, [])

  return(
    <div className="app">
      <Header />
      {
        productListData.length > 0 && (
          <>
            <Main productListData={productListData} selectedproduct={selectedProduct} />
            <ProductList productListData={productListData} setSelectedProduct={setSelectedProduct} />
          </>
        )
      }
    </div>
  )
}

export default App;
