import React, { Component } from 'react'
import Overlay from './Overlay'
import Greeting from './Greeting';
import PersonalAccount from './PersonalAccount';

class Greet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOverlayShifted: true,
    };
  }

  toggleOverlay = () => {
    this.setState((prevState) => ({
      isOverlayShifted: !prevState.isOverlayShifted,
    }));
  };

  render() {
    const { isOverlayShifted } = this.state;

    return (
      <div className="wrapper flex">
        <div>
          <Overlay toggleOverlay={this.toggleOverlay} />
        </div>
        {isOverlayShifted ? (
          <Greeting />
        ) : (
          <PersonalAccount />
        )}
      </div>
    )
  }
}

export default Greet