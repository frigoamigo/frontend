import React from 'react';
import LoginForm from './LoginForm';
import LoginFormMobile from './LoginFormMobile';
import RegistrationForm from './RegistrationForm';
import FridgesList from './FridgesList';
import { UserContext } from '../UserContext';

class Overlay extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      isLoginFormVisible: true,
      isMobile: false,
    };
  }


  toggleForm = () => {
    this.setState((prevState) => ({
      isLoginFormVisible: !prevState.isLoginFormVisible,
    }));
  };

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 479,
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { isMobile, isLoginFormVisible } = this.state;
    const authenticated = this.context.authenticated;

    return (
        <div className={`overlay ${authenticated ? 'shifted' : ''}`}>
          <div style={{ display: authenticated ? 'none' : 'block' }} className="overlay-content">
            {isLoginFormVisible ? (
                isMobile ? (
                    <LoginFormMobile isLoginButtonClicked={authenticated} />
                ) : (
                    <LoginForm isLoginButtonClicked={authenticated} />
                )
            ) : (
                <RegistrationForm isLoginButtonClicked={authenticated} />
            )}
            <div className="form-bottom flex manrope-400">
              {isLoginFormVisible ? (
                  <>
                <span style={{ display: authenticated ? 'none' : 'block' }} className="form-fp">
                  Забыли пароль?
                </span>
                    <button
                        style={{ display: authenticated ? 'none' : 'block' }}
                        className="reg-btn"
                        type="button"
                        onClick={this.toggleForm}
                    >
                      Зарегистрироваться
                    </button>
                  </>
              ) : (
                  <button
                      style={{ display: authenticated ? 'none' : 'block' }}
                      className="reg-btn"
                      type="button"
                      onClick={this.toggleForm}
                  >
                    Назад
                  </button>
              )}
            </div>
          </div>
          {authenticated ? <FridgesList /> : null}
        </div>
    );
  }
}

export default Overlay;