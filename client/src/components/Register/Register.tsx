import React, { useState } from 'react';
import './Register.scss';
import { useAppDispatch } from '../../redux/hooks';
import { logUser } from '../../redux/slices/userSlice';
import type { RegFormUser } from '../../redux/slices/types';

function Register(): JSX.Element {
  const dispatch = useAppDispatch();
  const [formInput, setFormInput] = useState<RegFormUser>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(logUser(formInput));
      }}
      className="form-reg"
    >
      <h2 className="form-reg_header">РЕГИСТРАЦИЯ</h2>
      <label htmlFor="name" className="form-reg_label">
        Имя пользователя
        <input
          required
          value={formInput.name}
          onChange={changeHandler}
          className="form-reg_label_input"
          type="text"
          name="name"
        />
      </label>
      <label htmlFor="email" className="form-reg_label">
        Email
        <input
          required
          value={formInput.email}
          onChange={changeHandler}
          className="form-reg_label_input"
          type="email"
          name="email"
        />
      </label>
      <label htmlFor="password" className="form-reg_label">
        Пароль
        <input
          required
          value={formInput.password}
          onChange={changeHandler}
          className="form-reg_label_input"
          type="password"
          name="password"
        />
      </label>
      <label htmlFor="confirmpassword" className="form-reg_label">
        Повторите пароль
        <input
          required
          value={formInput.confirmPassword}
          onChange={changeHandler}
          className="form-reg_label_input"
          type="password"
          name="confirmpassword"
        />
      </label>
      <button type="submit" className="form-reg_button">
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default Register;
