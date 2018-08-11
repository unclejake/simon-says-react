import React from 'react';
import ReactDOM from 'react-dom';
import Screen from './components/containers/Screen';
import Simon from './components/game-pieces/Simon';

class App extends React.Component {

  render() {
    return (
      <div>
        <Screen>
          <Simon />
        </Screen>
      </div>
    );
  }
}
export default App;

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
