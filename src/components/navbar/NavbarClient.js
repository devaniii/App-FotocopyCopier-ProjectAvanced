// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/navBar.css';

function NavbarClient() {
  return (
    <nav className='navegation'>
      <div className='logo'>
          <p className='utnWord'>UTN</p>
      </div>
      <ul className='links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/receipts">Receipts</Link>
        </li>
        <li>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
      <div className='perfilUsers'>
        <p>usuario</p>
      </div>
    </nav>
  );
}

export default NavbarClient;
