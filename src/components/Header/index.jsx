import React from 'react';
import './Header.css';
import logo from '../../assets/logos/run.svg';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <img src={logo} alt="Logo SportSee" className="logo" />
          <span className="logo-text">SportSee</span>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="/" className="nav-link">Accueil</a>
          </li>
          <li className="nav-list-item">
            <a href="/profile" className="nav-link">Profil</a>
          </li>
          <li className="nav-list-item">
            <a href="/settings" className="nav-link">Réglages</a>
          </li>
          <li className="nav-list-item">
            <a href="/community" className="nav-link">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
