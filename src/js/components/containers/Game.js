import React from 'react';
import Simon from '../game-pieces/Simon';
import StartButton from '../menu/StartButton';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameRunning: false
    };
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  };

  startGame() {
    this.setState({gameRunning: true});
  };

  endGame() {
    this.setState({gameRunning: false});
  };

  render() {
    return(
      <div id="game">
        {this.state.gameRunning ? <Simon startingColor={'green'} switchColor={'red'} /> : null}
        <StartButton gameRunning={this.state.gameRunning} startGame={this.startGame} endGame={this.endGame} />
      </div>
    );
  };

};

export default Game;
