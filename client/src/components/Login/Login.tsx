import React from 'react';
import './Login.scss';

function Login(): JSX.Element {
  return (
    <form className="form-log">
      <h2 className="form-log_header">ВХОД</h2>
      <label htmlFor="email" className="form-log_label">
        Email
        <input required className="form-log_label_input" type="text" name="email" placeholder="" />
      </label>
      <label htmlFor="password" className="form-log_label">
        Пароль
        <input required className="form-log_label_input" type="password" name="password" />
      </label>
      <button type="submit" className="form-log_button">
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default Login;
