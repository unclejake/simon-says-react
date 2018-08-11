import React from 'react';
import Simon from '../game-pieces/Simon';
import StartButton from '../menu/StartButton';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameRunnning: false
    };
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  };

startGame() {
  this.setState({gameRunnning: true});
};

endGame() {
  this.setState({gameRunnning: false});
}

  render() {
    return(
      <div id="game">
        {this.state.gameRunnning ? <Simon /> : null}
        <StartButton gameRunning={this.state.gameRunnning} startGame={this.startGame} endGame={this.endGame} />
      </div>
    );
  };

};

export default Game;
