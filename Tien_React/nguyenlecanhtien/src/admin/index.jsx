import React from 'react'
import Topnav from './components/Topnav'
import Menu from './components/menu'
import { Outlet } from 'react-router-dom';
import ProductList from './components/Product/ProductList';




export default function Admin() {
  var ss = document.createElement("link");
  ss.rel ="stylesheet";
  ss.type="text/css";
  ss.href="/admin/dist/css/adminlte.min.css";  
  document.head.appendChild(ss);
  return (
   <div className="wrapper">
    <Topnav />
    <Menu />

  <section className="content-wrapper">
   
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Outlet />
     
        </div>
      </div>
    </div>
  </section>
  
</div>



  )
}
