import React from 'react';
import SimonHolder from './SimonHolder';
import Simon from '../game-pieces/Simon';
import StartButton from '../menu/StartButton';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameRunning: false,
      numberOfSimons: 4,
      colorPairs: [
        {startingColor: 'red', switchColor: 'white'},
        {startingColor: 'green', switchColor: 'white'},
        {startingColor: 'yellow', switchColor: 'white'},
        {startingColor: 'blue', switchColor: 'white'}
      ]
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
    if(this.state.gameRunning) {
      this.simonHolder = <SimonHolder numberOfSimons={this.state.numberOfSimons} colorPairs={this.state.colorPairs} />
    } else {
      this.simonHolder = null;
    };
    return(
      <div id="game">
        {this.simonHolder}
        <StartButton gameRunning={this.state.gameRunning} startGame={this.startGame} endGame={this.endGame} />
      </div>
    );
  };

};

export default Game;
