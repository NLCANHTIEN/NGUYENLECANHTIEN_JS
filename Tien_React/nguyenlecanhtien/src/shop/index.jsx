import React, { useEffect } from 'react'
import Header from './components/features/Header';
import TopNav from './components/features/TopNav';
import GlobalNav from './components/features/GlobalNav';
import SideBar from './components/features/SideBar';
import Footer from './components/Footer/index.jsx'
import Conpyright from './components/features/Conpyright'
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/megamenu.css'
import './assets/font-awesome/css/font-awesome.css'
import { Outlet } from 'react-router-dom';
import productApi from '../api/productApi';

export default function Shop() {

  useEffect(() => {
    var params = {
      search: 'Kem'
    }
    const fetchProducts = async () => {

      var $response = await productApi.getAll(params)
      console.log($response);
    }
    fetchProducts();

  }, [])

  return (
    <>
      <TopNav></TopNav>
      <div className="container">
        <div id="gototop"> </div>
        <Header />
        <GlobalNav />
        <div className="row">
          <SideBar />
          <div className="span9">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
      <Conpyright />
    </>
  )
}
