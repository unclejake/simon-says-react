import React from 'react';
import Simon from '../game-pieces/Simon';
import StartButton from '../menu/StartButton';

class Game extends React.Component {

  render() {
    return(
      <div id="game">
        <Simon />
        <StartButton />
      </div>
    );
  };

};

export default Game;
