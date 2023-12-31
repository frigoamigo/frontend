import React from 'react';
import { UserContext } from '../../../UserContext';
import CreateFridgeMobile from './CreateFridgeMobile';
class FridgesListMobile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateFridgeClicked: false,
      activeFridge: null,
    };
  }

  static contextType = UserContext;

  handleChooseFridge = (fridge) => {
    this.setState({ activeFridge: fridge });
    this.context.setFridgeName(fridge.name);
  };

  handleCreateFridgeClick = () => {
    this.setState({ isCreateFridgeClicked: true });
  };

  handleCloseCreateFridge = () => {
    this.setState({ isCreateFridgeClicked: false });
  };

  render() {
    let user = this.context.user;
    let authenticated = this.context.authenticated;
    const { isCreateFridgeClicked } = this.state;

    return (
      <div>
        {isCreateFridgeClicked && (
          <CreateFridgeMobile handleCloseCreateFridge={this.handleCloseCreateFridge} />
        )}
        <div className="overlay-shifted flex">
          <div style={{ display: authenticated ? 'flex' : 'none' }} className="fridges">
            <p className="privet-overlay nextart-900">Привет</p>
            <button
              className="create-fridge btn-reset manrope-400"
              onClick={this.handleCreateFridgeClick}
            >
              <svg
                width="34"
                height="41"
                viewBox="0 0 34 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.38711 7.09908H8.29744V4.04502C8.3012 3.11129 8.67378 2.21687 9.33404 1.55662C9.99429 0.896367 10.8887 0.523777 11.8224 0.52002H30.475C31.4087 0.523777 32.3031 0.896367 32.9634 1.55662C33.6237 2.21687 33.9962 3.11129 34 4.04502V30.3755C33.9962 31.3093 33.6237 32.2037 32.9634 32.8639C32.3031 33.5242 31.4087 33.8968 30.475 33.9005H26.1936V36.4836C26.1899 37.5423 25.7676 38.5565 25.0191 39.305C24.2705 40.0536 23.2563 40.4758 22.1977 40.4796H4.38711C3.32847 40.4758 2.31427 40.0536 1.5657 39.305C0.817123 38.5565 0.394917 37.5423 0.391155 36.4836V11.095C0.394917 10.0364 0.817123 9.02219 1.5657 8.27362C2.31427 7.52504 3.32847 7.10284 4.38711 7.09908ZM30.475 31.2318C30.5874 31.2318 30.6988 31.2096 30.8027 31.1666C30.9066 31.1236 31.001 31.0605 31.0805 30.981C31.16 30.9015 31.2231 30.8071 31.2661 30.7032C31.3091 30.5993 31.3313 30.488 31.3313 30.3755V4.04502C31.3313 3.93258 31.3091 3.82123 31.2661 3.71734C31.2231 3.61345 31.16 3.51906 31.0805 3.43954C31.001 3.36003 30.9066 3.29696 30.8027 3.25393C30.6988 3.2109 30.5874 3.18875 30.475 3.18875H11.8224C11.5965 3.19242 11.3808 3.28382 11.221 3.44361C11.0612 3.6034 10.9698 3.81907 10.9662 4.04502V7.09908H22.1691C23.2278 7.10284 24.242 7.52504 24.9905 8.27362C25.7391 9.02219 26.1613 10.0364 26.1651 11.095V31.2318H30.475ZM3.13124 36.4836C3.13124 36.8356 3.27107 37.1732 3.51997 37.4221C3.76888 37.671 4.10646 37.8108 4.45847 37.8108H22.1691C22.5211 37.8108 22.8587 37.671 23.1076 37.4221C23.3565 37.1732 23.4963 36.8356 23.4963 36.4836V11.095C23.4963 10.743 23.3565 10.4054 23.1076 10.1565C22.8587 9.90764 22.5211 9.7678 22.1691 9.7678H4.38711C4.03511 9.7678 3.69752 9.90764 3.44862 10.1565C3.19971 10.4054 3.05988 10.743 3.05988 11.095L3.13124 36.4836Z"
                  fill="white"
                />
                <path
                  d="M5.54287 22.4551H11.9792V16.0187C12.0134 15.6886 12.1687 15.3829 12.4152 15.1607C12.6616 14.9384 12.9817 14.8154 13.3136 14.8154C13.6454 14.8154 13.9655 14.9384 14.212 15.1607C14.4584 15.3829 14.6138 15.6886 14.6479 16.0187V22.4551H21.0843C21.4144 22.4893 21.7201 22.6446 21.9423 22.8911C22.1646 23.1375 22.2876 23.4576 22.2876 23.7895C22.2876 24.1213 22.1646 24.4414 21.9423 24.6879C21.7201 24.9343 21.4144 25.0896 21.0843 25.1238H14.6479V31.5602C14.6138 31.8903 14.4584 32.196 14.212 32.4182C13.9655 32.6405 13.6454 32.7635 13.3136 32.7635C12.9817 32.7635 12.6616 32.6405 12.4152 32.4182C12.1687 32.196 12.0134 31.8903 11.9792 31.5602V25.1238H5.54287C5.21277 25.0896 4.90705 24.9343 4.6848 24.6879C4.46256 24.4414 4.33955 24.1213 4.33955 23.7895C4.33955 23.4576 4.46256 23.1375 4.6848 22.8911C4.90705 22.6446 5.21277 22.4893 5.54287 22.4551Z"
                  fill="white"
                />
              </svg>
            </button>
            <p className="admin-name manrope-300">{user.name}</p>
            <select
              className="form-input fridge flex list-reset"
              value={this.state.activeFridge ? this.state.activeFridge.name : ''}
              onChange={(e) => {
                const fridgeName = e.target.value;
                const fridge = user.fridges.find((f) => f.name === fridgeName);
                this.handleChooseFridge(fridge);
              }}
            >
              {user.fridges.map((fridge) => (
                <option key={fridge.name} value={fridge.name} className="fridges-item">
                  {fridge.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default FridgesListMobile;
