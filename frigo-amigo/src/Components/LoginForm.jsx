import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isLoginButtonClicked } = this.props;
    const { email, password } = this.state;
    const isButtonDisabled = email.trim() === '' || password.trim() === '';

    return (
      <form style={{ display: isLoginButtonClicked ? 'none' : 'flex' }}>
        <ul className='form-list flex'>
          <li className='form-item'>
            <input
              type='text'
              className='form-input manrope-100'
              name='email'
              placeholder="Логин"
              value={email}
              onChange={this.handleInputChange}
            />
          </li>
          <li className='form-item'>
            <input
              type='password'
              className='form-input manrope-100'
              name='password'
              placeholder="Пароль"
              value={password}
              onChange={this.handleInputChange}
            />
          </li>
          <li className='form-item'>
            <button className='form-btn manrope-100' 
            type="button" 
            onClick={this.props.toggleShift}
            disabled={isButtonDisabled}
            >
              <span>Войти</span>
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default LoginForm;