import React from 'react';
import {switchColor, toggleWasPressed} from '../../functions/stateChange';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startingColor: this.props.startingColor,
      switchColor: this.props.switchColor,
      wasPressed: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
  };

  handleMouseDown(e) {
    if(!this.state.wasPressed) {
      this.setState(switchColor);
      this.setState(toggleWasPressed);
      // not sure if there's a better way to do this but this works
      setTimeout(() => {this.setState(switchColor)}, 1000);
      setTimeout(() => {this.setState(toggleWasPressed)}, 1000);
    };
  };

  render() {
    return (
      <div id="simon" style={{height: '100px', width: '100px', background: this.state.startingColor}} onMouseDown={this.handleMouseDown} />
    );
  };

};

export default Simon;
