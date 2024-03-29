import React from 'react'
import { Link } from 'react-router-dom'

export default function menu() {
  return (

  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="../index3.html" className="brand-link">
      <img src="/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="sidebar-search-results"><div className="list-group"><a href="#st" className="list-group-item"><div className="search-title"><strong className="text-light" />N<strong className="text-light" />o<strong className="text-light" /> <strong className="text-light" />e<strong className="text-light" />l<strong className="text-light" />e<strong className="text-light" />m<strong className="text-light" />e<strong className="text-light" />n<strong className="text-light" />t<strong className="text-light" /> <strong className="text-light" />f<strong className="text-light" />o<strong className="text-light" />u<strong className="text-light" />n<strong className="text-light" />d<strong className="text-light" />!<strong className="text-light" /></div><div className="search-path" /></a></div></div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-is-opening menu-open">
            <a href="#st" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
            Products
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview" style={{display: 'block'}}>
              <li className="nav-item">
                <Link to='/admin/product' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p> Products List</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to='/admin/product/trash' className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p> Products Trash</p>
                </Link>
              </li>
              <li className="nav-item">
               
              </li>
            </ul>
          </li>
          <li className="nav-item">          
          </li>             
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  


  )
}
