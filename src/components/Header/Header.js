import React from 'react';
import './Header.css';
import logo from './../../assets/logo.svg'

const Header = () => {
  return (
    <header className="Header">
      <img alt="logo marvel" src={logo} />
      <h1 className="Header-title">explore o universo</h1>
      <h3 className="Header-subtitle">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!
      </h3>
    </header>
  )
}

export default Header
