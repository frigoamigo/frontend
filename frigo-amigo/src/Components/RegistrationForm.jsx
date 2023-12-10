import React from 'react';
import axios from 'axios';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      isEmailValid: true,
      isPasswordValid: true,
      isNameValid: true,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the state for the changed input field
    this.setState({
      [name]: value,
    });

    // Perform real-time validation based on the input field
    if (name === 'email') {
      this.setState({
        isEmailValid: this.isEmailValid(value),
      });
    } else if (name === 'password') {
      this.setState({
        isPasswordValid: this.isPasswordValid(value),
      });
    } else if (name === 'name') {
      this.setState({
        isNameValid: this.isNameValid(value),
      });
    }
  };

  isEmailValid = (email) => {
    const emailRegex = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+[a-z0-9]{2,}$/i;
    return emailRegex.test(email);
  };

  isPasswordValid = (password) => {
    const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i;
    return passwordRegex.test(password);
  };

  isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$/i;
    return nameRegex.test(name);
  };

  handleRegistrationClick = () => {
    const { email, password, name } = this.state;
    const isEmailValid = this.isEmailValid(email);
    const isPasswordValid = this.isPasswordValid(password);
    const isNameValid = this.isNameValid(name);

    this.setState({ isEmailValid, isPasswordValid, isNameValid });

    if (isEmailValid && isPasswordValid && isNameValid) {
      const postData = async () => {
        try {
          const response = await axios.post('http://localhost:8080/auth/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          });

          console.log(response.data);
        } catch (error) {
          console.error(`Error posting data: ${error}`);
        }
      };

      postData().then(() => {
        this.props.toggleShift();
      });

    }
  };

  render() {
    const { isLoginButtonClicked } = this.props;
    const { email, password, name } = this.state;

    const isEmailValid = this.isEmailValid(email);
    const isPasswordValid = this.isPasswordValid(password);
    const isNameValid = this.isNameValid(name);

    const isButtonDisabled = !isEmailValid || !isPasswordValid || !isNameValid;

    return (
      <form style={{ display: isLoginButtonClicked ? 'none' : 'flex' }}>
        <ul className='form-list flex'>
          <li className='form-item'>
            <input
              type='text'
              className={`form-input manrope-100 ${isEmailValid ? '' : 'invalid'}`}
              name='email'
              placeholder="Логин"
              value={email}
              onChange={this.handleInputChange}
            />
            {!isEmailValid && email.length > 0 && <p className="error-message">Неверный формат email</p>}
          </li>
          <li className='form-item'>
            <input
              type='password'
              className={`form-input manrope-100 ${isPasswordValid ? '' : 'invalid'}`}
              name='password'
              placeholder="Пароль"
              value={password}
              onChange={this.handleInputChange}
            />
            {!isPasswordValid && password.length > 0 && <p className="error-message">Неверный формат пароля</p>}
          </li>
          <li className='form-item'>
            <input
              type='text'
              className={`form-input manrope-100 ${isNameValid ? '' : 'invalid'}`}
              name='name'
              placeholder="Никнейм"
              value={name}
              onChange={this.handleInputChange}
            />
            {!isNameValid && name.length > 0 && <p className="error-message">Введите ваш никнейм</p>}
          </li>
          <li className='form-item mb'>
            <button
              className={`form-btn manrope-100 ${isButtonDisabled ? 'disabled' : ''}`}
              type="button"
              onClick={this.handleRegistrationClick}
              disabled={isButtonDisabled}
            >
              <span>Зарегистрироваться</span>
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default RegistrationForm;
