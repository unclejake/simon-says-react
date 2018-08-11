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

  const wrapper = shallow(<StartButton />);

  it('renders a button with startGameButton id', () => {
    expect(wrapper.find('button#startGameButton'));
  });

});
