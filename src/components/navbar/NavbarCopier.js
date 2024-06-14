// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarCopier() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarCopier;
