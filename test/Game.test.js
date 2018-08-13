import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import chai, {expect, should} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {spy} from 'sinon';
import Game from '../src/js/components/containers/Game';
import Simon from '../src/js/components/game-pieces/Simon';
import StartButton from '../src/js/components/menu/StartButton';

describe('Game component', () => {

  const wrapper = mount(<Game />);

  it('toggling gameRunning state a couple times still despawns/respawns Simon components', () => {
    wrapper.setState({gameRunning: true});
    expect(wrapper.find(Simon));
    wrapper.setState({gameRunning: false});
    expect(!wrapper.find(Simon));
  });

  it('renders Simon component based on gameRunnning state', () => {
    wrapper.setState({gameRunning: true});
    expect(wrapper.find(Simon));
    wrapper.setState({gameRunning: false});
    expect(!wrapper.find(Simon));
  });

  it('renders StartButton component', () => {
    expect(wrapper.find(StartButton));
  });

  describe('when rendering multiple Simon components', () => {

    it('renders a number of Simons equal to numberOfSimons state', () => {
      wrapper.setState({gameRunning: true});
      wrapper.setState({numberOfSimons: 5});
      expect(wrapper.find(Simon)).to.have.length(5);
    });

    it('assigns a unique id to each Simon component', () => {
      var testNumber = 3;
      wrapper.setState({gameRunning: true});
      wrapper.setState({numberOfSimons: testNumber});
      expect(wrapper.find(Simon)).to.have.length(testNumber);
      for(var i = 0; i < testNumber; i++) {
        expect(wrapper.find('[id="simon_' + i + '"]')).to.have.length(1);
      };
    });

    it('assigns different Simons different colors', () => {
      wrapper.setState({
        colorPairs: [
          {startingColor: 'red', switchColor: 'blue'},
          {startingColor: 'green', switchColor: 'yellow'},
          {startingColor: 'yellow', switchColor: 'red'},
          {startingColor: 'blue', switchColor: 'green'}
        ]
      });
      wrapper.setState({gameRunning: true});
      wrapper.setState({numberOfSimons: 4});
      const simonStyle0 = wrapper.find('[id="simon_0"]').prop('style');
      const simonStyle1 = wrapper.find('[id="simon_1"]').prop('style');
      const simonStyle2 = wrapper.find('[id="simon_2"]').prop('style');
      const simonStyle3 = wrapper.find('[id="simon_3"]').prop('style');
      expect(simonStyle0).to.have.property('background', 'red');
      expect(simonStyle1).to.have.property('background', 'green');
      expect(simonStyle2).to.have.property('background', 'yellow');
      expect(simonStyle3).to.have.property('background', 'blue');
    });

  });

});
