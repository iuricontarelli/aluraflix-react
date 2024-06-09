import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-title">ALURAFLIX</Link>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/new-video" className="header-link">Novo Vídeo</Link>
      </nav>
    </header>
  );
}

export default Header;
