import React from 'react';

class LoginForm extends React.Component {
  render() {
    const { isLoginButtonClicked } = this.props;
    return (
      <form style={{ display: isLoginButtonClicked ? 'none' : 'flex' }}>
        <ul className='form-list flex'>
          <li className='form-item'>
            <input
              type='text'
              className='form-input manrope-100'
              name='email'
              placeholder="Логин"
            />
          </li>
          <li className='form-item'>
            <input
              type='password'
              className='form-input manrope-100'
              name='password'
              placeholder="Пароль"
            />
          </li>
          <li className='form-item'>
            <button className='form-btn manrope-100' type="button" onClick={this.props.toggleShift}>
              <span>Войти</span>
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default LoginForm;