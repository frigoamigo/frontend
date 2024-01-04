import React, { useState } from 'react';
import UsersMobile from './UsersMobile';
import SettingsMobile from './SettingsMobile';
import { UserContext } from '../../../UserContext';

class PersonalAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      isSettingsClicked: false,
      isTurned: false,
    };
  }

  static contextType = UserContext;

  handleSettingsClick = () => {
    this.setState({
      isSettingsClicked: !this.state.isSettingsClicked,
      isTurned: !this.state.isTurned,
    });
  };
  render() {
    const authenticated = this.context.authenticated;

    if (!this.context.allDataLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="pers-acc">
        <div className="settings-outer">
          <button
            className={`settings btn-reset ${this.state.isTurned ? 'turned' : ''}`}
            onClick={this.handleSettingsClick}
          ></button>
        </div>

        {this.state.isSettingsClicked && <SettingsMobile style={{ opacity: 1 }} />}

        {!this.state.isSettingsClicked && authenticated && this.context.allDataLoaded && (
          <UsersMobile style={{ opacity: 0 }} />
        )}
      </div>
    );
  }
}

export default PersonalAccount;
