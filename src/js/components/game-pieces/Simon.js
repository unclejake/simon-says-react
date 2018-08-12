import React from 'react';
import {switchColor, toggleWasPressed} from '../../functions/stateChange';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startingColor: this.props.startingColor,
      switchColor: this.props.switchColor,
      wasPressed: false,
      shouldBePressed: this.props.shouldBePressed
    };
    this.flash = this.flash.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  };

  flash() {
    // calling functional setState functions from stateChange.js
    this.setState(switchColor);
    this.setState(toggleWasPressed);
    // not sure if there's a better way to do this but this works
    setTimeout(() => {this.setState(switchColor)}, 1000);
    setTimeout(() => {this.setState(toggleWasPressed)}, 1000);
  };

  flashAtInterval() {

  }

  handleMouseDown(e) {
    if(!this.state.wasPressed) {
      this.flash();
    };
  };

  render() {
    return (
      <div id={'simon_' + this.props.index} style={{height: '100px', width: '100px', background: this.state.startingColor}} onMouseDown={this.handleMouseDown} />
    );
  };

};

export default Simon;
