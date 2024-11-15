import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to get current route
import "./nav.css";

function Navbar() {
  const location = useLocation(); // This hook provides the current route
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Store', href: '/shoeCategoryPage' },
    { name: 'About', href: '/about' },
    { name: 'Cart', href: '/cart' },
    { name: 'Contact', href: '/contact' },
  ];

  // Function to check if the current link is active
  const isActive = (href) => location.pathname === href;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Shoeniverse</Link>
        <div className="navbar-menu">
          {navigation.map((item) => (
            <div key={item.name} className="nav-item">
              <Link
                to={item.href}
                className={isActive(item.href) ? 'active' : ''}  // Apply active class based on current route
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


