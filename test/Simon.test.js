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
    expect(simonDiv).to.have.style('background', 'black');
    wrapper.setState({color: 'red'});
    expect(simonDiv).to.have.style('background', 'red');
  });

  it('changes color state to red on click', ()  => {
    simonDiv.simulate('click');
    expect(wrapper.state().color).to.equal('red');
  });

});
