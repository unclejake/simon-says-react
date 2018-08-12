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

  it('renders a div with id of simon', () => {
    expect(wrapper.find('div#simon'));
  });

  it('on first render has color based on startingColor prop', () => {
    expect(simonDiv).to.have.style('background', 'green');
  });

  it('changes between startingColor and switchColor on mouseDown', () => {
    simonDiv.simulate('mouseDown');
    expect(simonDiv).to.have.style('background', 'blue');
  });


  jest.useFakeTimers();

  it('changes colors back after a timeout on mouseDown', () => {
    simonDiv.simulate('mouseDown');
    jest.runAllTimers();
    expect(simonDiv).to.have.style('background', 'green');
  });

  it('does not change colors if mouseDown event happens during timer', () => {
    simonDiv.simulate('mouseDown');
    simonDiv.simulate('mouseDown');
    expect(simonDiv).to.have.style('background', 'blue');
  });

});
