import React from 'react';
import Simon from '../game-pieces/Simon';
import StartButton from '../menu/StartButton';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameRunning: false,
      numberOfSimons: 1,
      colorPairs: [
        {startingColor: 'red', switchColor: 'blue'},
        {startingColor: 'green', switchColor: 'yellow'},
        {startingColor: 'yellow', switchColor: 'red'},
        {startingColor: 'blue', switchColor: 'green'}
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
      this.simons = Array.from(Array(this.state.numberOfSimons).keys()).map((simon, index) => (
        <Simon key={'simon_' + index} index={index} startingColor={this.state.colorPairs[index % 4].startingColor} switchColor={this.state.colorPairs[index % 4].switchColor} />
      ));
    } else {
      this.simons = null;
    };
    return(
      <div id="game">
        {this.simons}
        <StartButton gameRunning={this.state.gameRunning} startGame={this.startGame} endGame={this.endGame} />
      </div>
    );
  };

};

export default Game;
