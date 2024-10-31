import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation


function Header({ text, bgColor, textColor, about, contact }) {
  const styleHeader = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={styleHeader}>
      <Link to="/create-lookbook"><div className="container, logo">
        <h2>{text}</h2>
      </div></Link>
      <div className="header-links">
    <Link to="/about" className="header-link">
      <h2>{about}</h2>
    </Link>
    <Link to="/contact" className="header-link">
      <h2>{contact}</h2>
    </Link>
  </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Wear-House',
  contact: 'Contact',
  about: 'About',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',

};

export default Header;

