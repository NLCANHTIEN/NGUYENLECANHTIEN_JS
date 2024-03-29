import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <h2>Quan ly Product</h2>
      <Outlet />
    </div>
  )
}
