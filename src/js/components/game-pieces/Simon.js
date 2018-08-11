import React from 'react';

class Simon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: null,
      shape: null,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    this.setState({color: 'red'});
  };

  render() {
    return (
      <div id="simon" style={{height: '100px', width: '100px', background: (this.state.color !== null ? this.state.color : 'black')}} onClick={this.handleClick} />
    );
  };

};

export default Simon;
