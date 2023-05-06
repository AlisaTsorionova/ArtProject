import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar(): JSX.Element {
  return (
    <div className="container">
      <div>
        <a href="/" className="logo">
          NAZVANIE
        </a>
      </div>
      <div className="links">
        <NavLink className="link" to="/register">
          {' '}
          Регистрация
        </NavLink>
        <NavLink className="link" to="/login">
          {' '}
          Вход
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
