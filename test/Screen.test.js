import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
import {expect, should} from 'chai';
Enzyme.configure({ adapter: new Adapter() });
import Screen from '../src/js/components/containers/Screen';

describe('Screen component', () => {

  const wrapper = shallow(<Screen><p id='test1' /><div id='test2' /></Screen>);

  it('should render its children', () => {
    expect(wrapper.find('#test1'));
    expect(wrapper.find('#test2'));
  });

});
