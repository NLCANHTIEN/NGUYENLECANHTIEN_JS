import React, { children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './admin';
import Shop from './shop';
import Contact from './shop/components/features/Contact';
import AboutUs from './shop/components/features/AboutUs';
import Products from './shop/components/Products';


import Home from './shop/screens/home';
import ProductDetailScreen from './shop/screens/ProductDetailScreen';
import Dashboard from './shop/components/Dashboard';
import Product from './admin/components/Product';
import ProductList from './admin/components/Product/ProductList';
import ProductAdd from './admin/components/Product/ProductAdd';
import ProductEdit from './admin/components/Product/ProductEdit';
import ProductTrash from './admin/components/Product/ProductTrash';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/product',
        element: <Products />
      }
    ]
  },
 /*duong link admin */
  {
    path: '/admin',
    element: <Admin />,
children:[
  {
    index:true,
    element:<Dashboard />
  },
  {
    path:'/admin/product',
    element:<Product />,
    children:[  
      {
      index: true,
      element:<ProductList />
      },
      {
        path: '/admin/product/list/:page',
        element:<ProductList />
        },
      {
        path:'/admin/product/add',
        element:<ProductAdd />
      },
      {
        path:'/admin/product/edit:id',
        element:<ProductEdit />
      },
      {
        path:'/admin/product/trash',
        element:<ProductTrash />
      }
    ]
  }
]
  }
  ,
  //////
  {
    path: '/product/:slug',
    element: <ProductDetailScreen />

  },
  {
    path: '/productDetail',
    element: <ProductDetailScreen />

  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
