import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import chai, {expect, should} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {spy} from 'sinon';
import StartButton from '../src/js/components/menu/StartButton';

describe('StartButton component', () => {

  const startGameSpy = spy();
  const endGameSpy = spy();

  const wrapper = shallow(<StartButton startGame={startGameSpy} endGame={endGameSpy} />);

  it('renders a button with toggleGameButton id', () => {
    expect(wrapper.find('button#toggleGameButton'));
  });

  it('calls startGame function from props if gameRunning prop is false', () => {
    wrapper.setProps({gameRunning: false});
    wrapper.find('button#toggleGameButton').simulate('click');
    expect(startGameSpy).to.have.property('callCount', 1);
  });

  it('calls endGame function from props if gameRunning prop is true', () => {
    wrapper.setProps({gameRunning: true});
    wrapper.find('button#toggleGameButton').simulate('click');
    expect(endGameSpy).to.have.property('callCount', 1);
  });


});
