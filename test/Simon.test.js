import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import chai, {expect, should} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {spy} from 'sinon';
import Simon from '../src/js/components/game-pieces/Simon';

describe('Simon component', () => {

  const wrapper = mount(<Simon startingColor='green' switchColor='blue' />);

  const simonDiv = wrapper.find('div#simon');

  jest.useFakeTimers();

  it('renders a div with id of simon', () => {
    expect(wrapper.find('div#simon'));
  });

  it('on first render has color based on startingColor prop', () => {
    expect(simonDiv).to.have.style('background', 'green');
  });


  it('changes colors if flash function is called', () => {
    wrapper.instance().flash();
    expect(simonDiv).to.have.style('background', 'blue');
    jest.runAllTimers();
    expect(simonDiv).to.have.style('background', 'green');
  });

  it('changes between startingColor and switchColor on mouseDown', () => {
    simonDiv.simulate('mouseDown');
    expect(simonDiv).to.have.style('background', 'blue');
  });

  it('changes colors back after a timeout on mouseDown', () => {
    simonDiv.simulate('mouseDown');
    jest.runAllTimers();
    expect(simonDiv).to.have.style('background', 'green');
  });

  it('does not change colors if mouseDown event happens during timer', () => {
    simonDiv.simulate('mouseDown');
    simonDiv.simulate('mouseDown');
    expect(simonDiv).to.have.style('background', 'blue');
    jest.runAllTimers();
  });

  // so there's a couple things i need to do before i have what i think would be MVP
  // i need the simons to flash in a pattern at game start
  // i need the user to be able to hit simons in that pattern's order in order to succeed
  // i need the simons to show up in a shape of some sort instead of some giant ol' line
});
