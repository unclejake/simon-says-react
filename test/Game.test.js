import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import chai, {expect, should} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {spy} from 'sinon';
import Game from '../src/js/components/containers/Game';
import SimonHolder from '../src/js/components/containers/SimonHolder';
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

  it('renders SimonHolder component based on gameRunning state', () => {
    wrapper.setState({gameRunning: true});
    expect(wrapper.find(SimonHolder));
    wrapper.setState({gameRunning: false});
    expect(!wrapper.find(SimonHolder));
  });

});
