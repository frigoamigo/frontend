import React from 'react';
import { UserContext } from '../UserContext';
class FridgesList extends React.Component {

  static contextType = UserContext;
  render() {
    const { user } = this.context;
    const { isLoginButtonClicked } = this.props;
    if (!isLoginButtonClicked && !user) {
      return null;
    }
    console.log(user);
    return (
      <div className='overlay-shifted flex'>
        <div style={{ display: isLoginButtonClicked ? 'flex' : 'none' }} className='fridges'>
          <p className='privet-overlay nextart-900'>Привет</p>
          {/* <p className='admin-name manrope-300'>{user.name}</p> */}
          <p className='admin-name manrope-300'>Username</p>
          <svg width="296" height="6" viewBox="0 0 296 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H293" stroke="white" strokeWidth="6" strokeLinecap="round" />
          </svg>
          <ul className='fridges-list flex list-reset'>
            <li className='fridges-item'>
              <p className='fridges-name manrope-400'>Мой холодильник</p>
            </li>
            <li className='fridges-item'>
              <p className='fridges-name manrope-400'>Еще холодильник</p>
            </li>
            <li className='fridges-item'>
              <p className='fridges-name manrope-400'>Синий</p>
            </li>
          </ul>
          <span className='create-fridge manrope-400'>Создать холодильник</span>
        </div>
      </div>
    );
  }
}

export default FridgesList;