import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container-fluid bg-secondary text-white">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
    <p className="col-md-4 mb-0 text-body-secondary">© 2023 Bmj Developer By : Shah Nawaz Unar, </p>

 
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><Link to="/hero" className="nav-Link px-2 text-white body-secondary">Home</Link></li>
      <li className="nav-item"><Link to="/products" className="nav-Link px-2 text-white body-secondary">Products</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-Link px-2 text-white body-secondary">About</Link></li>
      <li className="nav-item"><Link to="/contect" className="nav-Link px-2 text-white body-secondary">Contect Us</Link></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer
