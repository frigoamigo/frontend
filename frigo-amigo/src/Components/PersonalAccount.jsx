import React, { useState } from 'react'
import Users from './Users';
import { CSSTransition } from 'react-transition-group';
import Settings from './Settings';

const PersonalAccount = () => {
  const [isSettingsClicked, setIsSettingsClicked] = useState(false);
  const [isTurned, setIsTurned] = useState(false);
  const [showUsers, setShowUsers] = useState(true);

  const handleSettingsClick = () => {
    setIsSettingsClicked(!isSettingsClicked);
    setIsTurned(!isTurned);
    setShowUsers(!showUsers);
  };

  return (
    <div className='pers-acc'>
      <div className={`settings-circle ${isSettingsClicked ? 'expanded' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="133" height="128" viewBox="0 0 133 128" fill="none">
          <ellipse cx="95.5" cy="35" rx="93" ry="93" fill="#EC9A29" fill-opacity="0.56" />
        </svg>
      </div>
      <button className={`settings btn-reset ${isTurned ? 'turned' : ''}`} onClick={handleSettingsClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 37.5C34.1421 37.5 37.5 34.1421 37.5 30C37.5 25.8579 34.1421 22.5 30 22.5C25.8579 22.5 22.5 25.8579 22.5 30C22.5 34.1421 25.8579 37.5 30 37.5Z" stroke="#272826" stroke-width="3.75" />
          <path d="M34.4137 5.3806C33.4947 5 32.33 5 30.0002 5C27.6705 5 26.5057 5 25.5867 5.3806C24.3617 5.88808 23.3883 6.86145 22.8808 8.08658C22.6492 8.64585 22.5585 9.29625 22.523 10.245C22.4709 11.6392 21.7559 12.9297 20.5476 13.6273C19.3393 14.3249 17.8642 14.2988 16.6307 13.6469C15.7914 13.2032 15.1828 12.9566 14.5826 12.8776C13.2678 12.7045 11.9382 13.0607 10.8861 13.868C10.0971 14.4735 9.51466 15.4822 8.34981 17.4998C7.18496 19.5174 6.60254 20.5262 6.47271 21.5123C6.29964 22.827 6.65591 24.1566 7.46319 25.2087C7.83164 25.689 8.34949 26.0925 9.15321 26.5975C10.3347 27.34 11.095 28.6048 11.0949 30C11.0948 31.3952 10.3346 32.6597 9.15319 33.402C8.34936 33.9072 7.83144 34.311 7.46294 34.7913C6.65566 35.8433 6.29939 37.1728 6.47249 38.4875C6.60229 39.4735 7.18471 40.4825 8.34956 42.5C9.51444 44.5175 10.0969 45.5265 10.8859 46.1317C11.9379 46.939 13.2676 47.2952 14.5823 47.1222C15.1825 47.0432 15.791 46.7965 16.6303 46.353C17.8639 45.701 19.3391 45.675 20.5475 46.3725C21.7558 47.0702 22.4709 48.3607 22.523 49.7552C22.5585 50.7037 22.6492 51.3542 22.8808 51.9135C23.3883 53.1385 24.3617 54.112 25.5867 54.6195C26.5057 55 27.6705 55 30.0002 55C32.33 55 33.4947 55 34.4137 54.6195C35.6387 54.112 36.6122 53.1385 37.1195 51.9135C37.3512 51.3542 37.442 50.7038 37.4775 49.755C37.5295 48.3608 38.2445 47.0702 39.4527 46.3725C40.661 45.6747 42.1362 45.701 43.37 46.353C44.2092 46.7965 44.8177 47.043 45.4177 47.122C46.7325 47.2953 48.0622 46.939 49.1142 46.1317C49.9032 45.5262 50.4857 44.5175 51.6505 42.4998C52.8155 40.4823 53.398 39.4735 53.5277 38.4875C53.7007 37.1728 53.3445 35.843 52.5372 34.791C52.1687 34.3107 51.6507 33.907 50.847 33.402C49.6657 32.6597 48.9055 31.395 48.9055 29.9997C48.9055 28.6045 49.6657 27.3403 50.847 26.598C51.651 26.0928 52.169 25.6892 52.5375 25.2087C53.3447 24.1568 53.701 22.8272 53.528 21.5124C53.3982 20.5264 52.8157 19.5176 51.6507 17.5C50.486 15.4824 49.9035 14.4736 49.1145 13.8682C48.0625 13.0609 46.7327 12.7046 45.418 12.8777C44.818 12.9567 44.2095 13.2034 43.37 13.647C42.1365 14.299 40.6612 14.3251 39.453 13.6274C38.2445 12.9298 37.5295 11.6391 37.4775 10.2448C37.442 9.2962 37.3512 8.64583 37.1195 8.08658C36.6122 6.86145 35.6387 5.88808 34.4137 5.3806Z" stroke="#272826" stroke-width="3.75" />
        </svg>
      </button>
      <CSSTransition
        in={showUsers}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Users />
      </CSSTransition>
      <CSSTransition
        in={!showUsers}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Settings />
      </CSSTransition>
    </div>
  )
}

export default PersonalAccount