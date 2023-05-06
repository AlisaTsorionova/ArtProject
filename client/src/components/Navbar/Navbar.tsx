import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/userSlice';

function Navbar(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch()
  return (
    <div className="container">
      <div>
        <a href="/" className="logo">
          NAZVANIE
        </a>
      </div>
      {user.status === 'logged' ? (
        <NavLink className="link" to="/"
        onClick={()=>dispatch(logoutUser())}
        >
          {' '}
          Выход
        </NavLink>
      ) : (
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
      )}
    </div>
  );
}

export default Navbar;
