import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import LoginFormMobile from './LoginFormMobile'; // Новый компонент для мобильной версии
import RegistrationForm from './RegistrationForm';
import FridgesList from './FridgesList';

const Overlay = (props) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [isLoginButtonClicked, setLoginButtonClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleForm = () => {
    setLoginFormVisible((prev) => !prev);
  };

  const toggleShift = () => {
    setLoginButtonClicked((prev) => !prev);
    props.toggleOverlay();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`overlay ${isLoginButtonClicked ? 'shifted' : ''}`}>
      <div style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="overlay-content">
        {isLoginFormVisible ? (
          isMobile ? (
            <LoginFormMobile isLoginButtonClicked={isLoginButtonClicked} toggleShift={toggleShift} />
          ) : (
            <LoginForm isLoginButtonClicked={isLoginButtonClicked} toggleShift={toggleShift} />
          )
        ) : (
          <RegistrationForm isLoginButtonClicked={isLoginButtonClicked} toggleShift={toggleShift} />
        )}
        <div className="form-bottom flex manrope-400">
          {isLoginFormVisible ? (
            <>
              <span style={{ display: isLoginButtonClicked ? 'none' : 'block' }} className="form-fp">
                Забыли пароль?
              </span>
              <button
                style={{ display: isLoginButtonClicked ? 'none' : 'block' }}
                className="reg-btn"
                type="button"
                onClick={toggleForm}
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <button
              style={{ display: isLoginButtonClicked ? 'none' : 'block' }}
              className="reg-btn"
              type="button"
              onClick={toggleForm}
            >
              Назад
            </button>
          )}
        </div>
      </div>
      <FridgesList isLoginButtonClicked={isLoginButtonClicked} />
    </div>
  );
};

export default Overlay;
