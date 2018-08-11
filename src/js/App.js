import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/containers/Screen';
import Game from './components/containers/Game';

class App extends React.Component {

  render() {
    return (
      <div>
        <Screen>
          <Game />
        </Screen>
      </div>
    );
  }
}
export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
