import React from 'react';
import Simon from '../game-pieces/Simon';

class SimonHolder extends React.Component {

  render() {
    this.simons = Array.from(Array(this.props.numberOfSimons).keys()).map((simon, index) => (this.props.colorPairs &&
      <Simon key={'simon_' + index} index={index} startingColor={this.props.colorPairs[index % this.props.colorPairs.length].startingColor} switchColor={this.props.colorPairs[index % this.props.colorPairs.length].switchColor} />
    ));
    return(
      <div>
        {this.simons}
      </div>
    );
  }

}

export default SimonHolder;
