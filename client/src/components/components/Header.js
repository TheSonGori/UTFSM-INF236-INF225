// src/header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/hospital.png" alt="Logo" />
      </div>
      <div className="return-link">
        <a href="/">Regresar a Menú</a>
      </div>
    </header>
  );
};

export default Header;
