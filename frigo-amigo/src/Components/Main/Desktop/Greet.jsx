import React, { Component } from 'react';
import Overlay from './Overlay';
import Greeting from './Greeting';
import PersonalAccount from './PersonalAccount';
import { UserContext } from '../../../UserContext';

class Greet extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = UserContext;

  render() {
    return (
      <div className="wrapper flex">
        <div>
          <Overlay />
        </div>
        {!this.context.authenticated ? <Greeting /> : <PersonalAccount />}
      </div>
    );
  }
}

export default Greet;
