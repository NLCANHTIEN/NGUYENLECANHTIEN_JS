import React from 'react'
import AppURL from '../../../api/App.Url'
import { Link } from 'react-router-dom';
export default function product(prop) {
  var product = prop.product;
  return (
 
    <li className="span3" style={{ height:380, margin:3}}>
        <div className="thumbnail" style={{ height:380}}>
          <Link to={`/product/${product.slug}`} className="overlay" > </Link>
          <a className="zoomTool" href="product_details.html" title="add to cart"><span className="icon-search" /> QUICK VIEW</a>
          <Link to={`/product/${product.slug}`}><img src={`${AppURL.ImgUrl}${product.image}`}  alt='hinh1' /> </Link>
          <div className="caption cntr">
            <p>{product.product_name}</p>
            <p><strong> ${product.price}</strong></p>
            <h4><a className="shopBtn" href="#st" title="add to cart"> Add to cart </a></h4>
            
         
            <br className="clr" />
          </div>
        </div>
      </li>
  )
}
