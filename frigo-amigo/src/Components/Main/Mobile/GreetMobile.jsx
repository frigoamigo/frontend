import React, { Component } from 'react';
import PersonalAccountMobile from './PersonalAccountMobile';
import { UserContext } from '../../../UserContext';
import OverlayMobile from './OverlayMobile';
import GreetingMobile from './GreetingMobile';

class Greet extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = UserContext;

  render() {
    return (
      <div className="wrapper flex">
        <div>
          <OverlayMobile />
        </div>
        {!this.context.authenticated ? <GreetingMobile /> : <PersonalAccountMobile />}
      </div>
    );
  }
}

export default Greet;
