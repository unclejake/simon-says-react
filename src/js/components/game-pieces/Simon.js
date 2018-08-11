import React from 'react';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      shape: null,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.colorPairs = {};
    this.colorPairs['red'] = 'black';
    this.colorPairs['black'] = 'red';
  };


  handleClick(e) {
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
      <div id="simon" style={{height: '100px', width: '100px', background: (this.state.color)}} onClick={this.handleClick} />
    );
  };

};

export default Simon;
