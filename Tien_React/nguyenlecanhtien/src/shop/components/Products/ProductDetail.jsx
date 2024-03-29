import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '../../../api/productApi';
import AppURL from '../../../api/App.Url'
import Loading from '../features/Loading' 


export default function ProductDetail() {
  var{slug}=useParams();
  const[loading, setLoading]=useState(true);
  const[product, setProduct]=useState({});
  useEffect(()=>{
    const fetchProduct =async ()=>{
  var response= await productApi.getBySlug(slug);
  setProduct(response)
  setLoading(false)
 }
 fetchProduct()
  }, [])
  var myWiew = loading === true ? <Loading /> :
  (
    <div className="well well-small">
    <div className="row-fluid">
      <div className="span5">
        <div id="myCarousel" className="carousel slide cntr">
          <div className="carousel-inner">
            <div className="item active">
              <a href="#st"> <img src={`${AppURL.ImgUrl}${product.image}`} alt='hinh1'style={{width: '100%'}} /></a>
            </div>
           
          </div>
          <a className="left carousel-control" href="#stmyCarousel" data-slide="prev">‹</a>
          <a className="right carousel-control" href="#stmyCarousel" data-slide="next">›</a>
        </div>
      </div>
      <div className="span7">
        <h3>{product.product_name}[${product.price}]</h3>
        <hr className="soft" />
        <form className="form-horizontal qtyFrm">
          <div className="control-group">
            <label className="control-label"><span>${product.price}</span></label>
            <div className="controls">
              <input type="number" className="span6" placeholder="Qty." />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html:product.summary}} />
      
          <p>
          
          
            <button type="submit" className="shopBtn"><span className=" icon-shopping-cart" /> Add to cart</button>
          </p></form>
      </div>
    </div>
    <hr className="softn clr" />
    <div dangerouslySetInnerHTML={{ __html:product.detail }} />
 
    <div id="myTabContent" className="tab-content tabWrapper">
     
    </div>
  </div>

    
)
  
  return (
  <>
  {myWiew}
  </>
)
}
