import React from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import { UsersService } from '../../../Services/users.service';

class LoginForm extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      isButtonDisabled: false,
    };
  }

  handleLoginClick = () => {
    const { email, password } = this.state;

    this.setState({ isLoading: true, isButtonDisabled: true });

    const postData = async () => {
      try {
        // Placeholder for login
        const data = await UsersService.getUsers();
        const user = data.find((user) => user.email === email && user.password === password);

        // Code for login
        // const response = await axios.get(
        //   'http://localhost:8080/auth/login',
        //   {
        //     email: email,
        //     password: password,
        //   },
        //   { withCredentials: true },
        // );
        // console.log(response.data);
        // const user = response.data.userData;
        this.context.setUser(user);
        this.context.setAuthenticated(true);
        this.context.setFridgeName(user.fridges[0].name);
      } catch (error) {
        console.error(`Error getting data: ${error}`);
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

  render() {
    const { isLoginButtonClicked } = this.props;
    const { email, password, isButtonDisabled } = this.state;

    return (
      <form style={{ display: isLoginButtonClicked ? 'none' : 'flex' }}>
        <ul className="form-list flex">
          <li className="form-item">
            <input
              type="text"
              className="form-input manrope-100"
              name="email"
              placeholder="Логин"
              value={email}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="form-item">
            <input
              type="password"
              className="form-input manrope-100"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={this.handleInputChange}
            />
          </li>
          <li className="form-item">
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

export default LoginForm;
