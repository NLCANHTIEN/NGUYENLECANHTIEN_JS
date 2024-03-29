import React, { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
import Product from './Product'
import Loading from '../features/Loading'


export default function Products() {
  // khi load du lieu xong loing
  const [loading, setLoading] = useState(true);
  //bien products chua danh sach sp
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      var response = await productApi.getAll();
      
      
      setProducts(response.data);
      setLoading(false)
        
    };
    fetchProducts()
  }, [])
    var myWiew = loading === true ? <Loading /> :
      (
        products.map((product) => {
          return <Product product={product} key={product.id}  />
  })
    )
  return (
    <div className="well well-small">
      <h3>Our Products </h3>
      <div className="row-fluid">
        <ul className="thumbnails">
          {myWiew}
        </ul>
      </div>
    </div>

  )
}
