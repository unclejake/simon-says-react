import React from 'react';

class StartButton extends React.Component {

  render() {
    return(
      <div>
        <button id="toggleGameButton" onClick={this.props.gameRunning ? this.props.endGame : this.props.startGame}>
          {this.props.gameRunning ? 'End Game' : 'Start Game'}
        </button>
      </div>
    );
  };

};

export default StartButton;
