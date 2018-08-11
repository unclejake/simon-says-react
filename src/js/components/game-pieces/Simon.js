import React from 'react';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      shape: null,
      isFlashing: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.colorPairs = {};
    this.colorPairs['red'] = 'black';
    this.colorPairs['black'] = 'red';
  };

  handleMouseDown(e) {
    for(var color in this.colorPairs) {
      if(this.colorPairs.hasOwnProperty(color)) {
        if(color === this.state.color) {
          this.setState({color: this.colorPairs[color]});
        };
      };
    };
  };

  handleMouseUp(e) {
    for(var color in this.colorPairs) {
      if(this.colorPairs.hasOwnProperty(color)) {
        if(color === this.state.color) {
          this.setState({color: this.colorPairs[color]});
        };
      };
    };
  };

  render() {
    return (
      <div id="simon" style={{height: '100px', width: '100px', background: (this.state.color)}} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} />
    );
  };

};

export default Simon;
