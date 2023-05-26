import React from 'react'
import './Products.css'
import { Link, Outlet } from 'react-router-dom'
function Products() {
  return (
    <>

    <div className="wrapper">
    <nav className='nav-bar'>
  <ul className='un-order'>
   
    <li className='list-item'><Link to="rose">Roses Flower</Link></li>
    <li className='list-item'><Link to="leli">Lilies Flower</Link></li>
    <li className='list-item'><Link to="jar">Mason Jar Flower</Link></li>
  </ul>
</nav>
    </div>
      <Outlet/>
    </>
  )
}

export default Products
