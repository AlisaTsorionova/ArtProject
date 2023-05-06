import React from 'react';
import './Register.scss';

function Register(): JSX.Element {
  return (
    <form className="form-reg">
      <h2 className="form-reg_header">РЕГИСТРАЦИЯ</h2>
      <label htmlFor="name" className="form-reg_label">
        Имя пользователя
        <input required className="form-reg_label_input" type="text" name="name" />
      </label>
      <label htmlFor="email" className="form-reg_label">
        Email
        <input required className="form-reg_label_input" type="text" name="email" />
      </label>
      <label htmlFor="password" className="form-reg_label">
        Пароль
        <input required className="form-reg_label_input" type="password" name="password" />
      </label>
      <label htmlFor="confirmpassword" className="form-reg_label">
        Повторите пароль
        <input required className="form-reg_label_input" type="password" name="confirmpassword" />
      </label>
      <button type="submit" className="form-reg_button">
        СОХРАНИТЬ
      </button>
    </form>
  );
}

export default Register;
