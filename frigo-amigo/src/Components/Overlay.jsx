import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import FridgesList from './FridgesList';

export default class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginFormVisible: true,
      isLoginButtonClicked: false,
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLoginFormVisible: !prevState.isLoginFormVisible,
    }));
  };

  toggleShift = () => {
    this.setState((prevState) => ({
      isLoginButtonClicked: !prevState.isLoginButtonClicked,
    }));
    this.props.toggleOverlay();
  }

  render() {
    const { isLoginFormVisible, isLoginButtonClicked } = this.state;
    return (
      <div className={`overlay ${isLoginButtonClicked ? 'shifted' : ''}`}>
        <div style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="overlay-content">
          {isLoginFormVisible ? (
            <LoginForm isLoginButtonClicked={isLoginButtonClicked} toggleShift={this.toggleShift} />
          ) : (
            <RegistrationForm isLoginButtonClicked={isLoginButtonClicked} toggleShift={this.toggleShift} />
          )}
          <div className="form-bottom flex manrope-400">
            {isLoginFormVisible ? (
              <>
                <span style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="form-fp">Забыли пароль?</span>
                <button style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="reg-btn" type="button" onClick={this.toggleForm}>
                  Зарегистрироваться
                </button>
              </>
            ) : (
              <button style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="reg-btn" type="button" onClick={this.toggleForm}>
                Назад
              </button>
            )}
          </div>
        </div>
        <FridgesList isLoginButtonClicked={isLoginButtonClicked} />
      </div>
    );
  }
}