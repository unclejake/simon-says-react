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

  const wrapper = mount(<Simon />);

  const simonDiv = wrapper.find('div#simon');

  it('renders a div with id of simon', () => {
    expect(wrapper.find('div#simon'));
  });

  it('changes color based on state', () => {
    wrapper.setState({color: 'black'});
    expect(simonDiv).to.have.style('background', 'black');
    wrapper.setState({color: 'red'});
    expect(simonDiv).to.have.style('background', 'red');
  });

  it('changes color state on mouseDown', ()  => {
    wrapper.setState({color: 'black'});
    simonDiv.simulate('mouseDown');
    expect(wrapper.state().color).to.equal('red');
  });

  it('changes color state on mouseUp', ()  => {
    wrapper.setState({color: 'black'});
    simonDiv.simulate('mouseUp');
    expect(wrapper.state().color).to.equal('red');
  });

  // so the simon component needs to like, you know, beep and flash and change color for a second, that's how you know to click it
  // also later it should flash a little bit after the simon component before it in a pattern flashes, but thats not important now

});
