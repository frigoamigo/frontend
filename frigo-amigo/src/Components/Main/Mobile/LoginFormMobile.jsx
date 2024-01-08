import React from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import { UsersService } from '../../../Services/users.service';
import 'animate.css';

class LoginFormMobile extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isButtonDisabled: false,
      isArrowClicked: false,
      isArrowClickedd: false,
    };
  }

  handleLoginClick = () => {
    const { email, password } = this.state;

    this.setState({ isLoading: true, isButtonDisabled: true });

    const postData = async () => {
      try {
        const data = await UsersService.getUsers();
        const user = data.find((user) => user.email === email && user.password === password);

        // const response = await axios.post('http://localhost:8080/auth/login', {
        //   email: email,
        //   password: password
        // }, {withCredentials: true});
        // console.log(response.data);
        // const user = response.data.userData;
        this.context.setUser(user);
        this.context.setAuthenticated(true);
        this.context.setFridgeName(user.fridges[0].name);
      } catch (error) {
        console.error(`Error posting data: ${error}`);
      } finally {
        this.setState({ isLoading: false, isButtonDisabled: false });
      }
    };

    postData();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleArrowClick = () => {
    this.setState({ isArrowClicked: true });
  };

  handleArrowClickk = () => {
    this.setState({ isArrowClickedd: true });
  };

  render() {
    const { isLoginButtonClicked } = this.props;
    const { email, password, isButtonDisabled, isArrowClicked, isArrowClickedd } = this.state;

    return (
      <form style={{ display: isLoginButtonClicked ? 'none' : 'flex' }}>
        <ul className="form-list flex">
          <li
            className={`form-item ${
              isArrowClicked ? 'animate__animated animate__fadeOutLeft' : ''
            }`}
          >
            <input
              type="text"
              className="form-input manrope-100"
              name="email"
              placeholder="Логин"
              value={email}
              onChange={this.handleInputChange}
            />
            <svg
              onClick={this.handleArrowClick}
              className="mobile-arrow"
              width="26"
              height="42"
              viewBox="0 0 26 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1202 39.4565L23.2368 21.0793L15.1202 2.35203"
                stroke="#B5B6AF"
                strokeWidth="3.47855"
                strokeLinecap="round"
              />
              <path
                d="M2.36531 39.4565L10.4819 21.0793L2.36532 2.35203"
                stroke="#B5B6AF"
                strokeWidth="3.47855"
                strokeLinecap="round"
              />
            </svg>
          </li>
          <li
            className={`form-item two ${
              isArrowClicked ? 'animate__animated animate__fadeInRight' : ''
            } ${isArrowClickedd ? 'animate__animated animate__fadeOutLeft' : ''}`}
            style={{ display: isArrowClicked ? '' : 'none' }}
          >
            <input
              type="password"
              className="form-input manrope-100"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={this.handleInputChange}
            />
            <svg
              onClick={this.handleArrowClickk}
              className="mobile-arrow"
              width="26"
              height="42"
              viewBox="0 0 26 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1202 39.4565L23.2368 21.0793L15.1202 2.35203"
                stroke="#B5B6AF"
                strokeWidth="3.47855"
                strokeLinecap="round"
              />
              <path
                d="M2.36531 39.4565L10.4819 21.0793L2.36532 2.35203"
                stroke="#B5B6AF"
                strokeWidth="3.47855"
                strokeLinecap="round"
              />
            </svg>
          </li>
          <li
            className={`form-item three ${
              isArrowClickedd ? 'animate__animated animate__fadeInRight' : ''
            }`}
            style={{ display: isArrowClickedd ? '' : 'none' }}
          >
            <button
              className="form-btn manrope-100"
              type="button"
              onClick={this.handleLoginClick}
              disabled={isButtonDisabled}
            >
              {this.state.isLoading ? <span className="loader"></span> : <span>Войти</span>}
            </button>
          </li>
        </ul>
      </form>
    );
  }
}

export default LoginFormMobile;
