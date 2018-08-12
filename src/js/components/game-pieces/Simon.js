import React from 'react';
import {switchColor} from '../../functions/stateChange';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startingColor: this.props.startingColor,
      switchColor: this.props.switchColor
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
  };

  handleMouseDown(e) {
    this.setState(switchColor);
    setTimeout(() => {this.setState(switchColor)}, 1000);
  };

  render() {
    return (
      <div id="simon" style={{height: '100px', width: '100px', background: this.state.startingColor}} onMouseDown={this.handleMouseDown} />
    );
  };

};

export default Simon;
