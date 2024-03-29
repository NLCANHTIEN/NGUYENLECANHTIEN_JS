import React from 'react'
import SpecialProducts from './SpecialProducts'

export default function SpecialProduct() {
  return (
    <div className="well well-small">
  <h3>New Products </h3>
  <hr className="soften" />
  <div className="row-fluid">
    <div id="newProductCar" className="carousel slide">
      <div className="carousel-inner">
        <div className="item">
          <ul className="thumbnails">
          <SpecialProducts></SpecialProducts>
          <SpecialProducts></SpecialProducts>
          <SpecialProducts></SpecialProducts>
          <SpecialProducts></SpecialProducts>
          </ul>
        </div>
    
      </div>
      <a className="left carousel-control" href="#stnewProductCar" data-slide="prev">‹</a>
      <a className="right carousel-control" href="#stnewProductCar" data-slide="next">›</a>
    </div>
  </div>
  
</div>

  )
}