import React from 'react';

class RegistrationForm extends React.Component {
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
                  <input
                    type='text'
                    className='form-input manrope-100'
                    name='name'
                    placeholder="Никнейм"
                  />
                </li>
          <li className='form-item mb'>
            <button className='form-btn manrope-100' type="button" onClick={this.props.toggleShift}>
              <span>Зарегистрироваться</span>
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default RegistrationForm;