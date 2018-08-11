import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
import {expect, should} from 'chai';
import {spy} from 'sinon';
Enzyme.configure({ adapter: new Adapter() });
import Simon from '../src/js/components/game-pieces/Simon';

describe('Simon component', () => {

  const wrapper = shallow(<Simon />);

  it('renders a div with id of simon', () => {
    expect(wrapper.find('div#simon'));
  });

});
