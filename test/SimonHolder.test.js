import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {mount, shallow} from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import chai, {expect, should} from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import {spy} from 'sinon';
import SimonHolder from '../src/js/components/containers/SimonHolder';
import Simon from '../src/js/components/game-pieces/Simon';

describe('SimonHolder component', () => {

  const testColorPairs = [
    {startingColor: 'red', switchColor: 'blue'},
    {startingColor: 'green', switchColor: 'yellow'},
    {startingColor: 'yellow', switchColor: 'red'},
    {startingColor: 'blue', switchColor: 'green'}
  ];

  const testNumberOfSimons = 5;

  const testGameRunning = true;

  const wrapper = mount(<SimonHolder colorPairs={testColorPairs} numberOfSimons={testNumberOfSimons} gameRunning={testGameRunning} />)

  describe('when rendering multiple Simon components', () => {

    it('renders a number of Simons equal to numberOfSimons prop', () => {
      expect(wrapper.find(Simon)).to.have.length(testNumberOfSimons);
    });

    it('assigns a unique id to each Simon component', () => {
      expect(wrapper.find(Simon)).to.have.length(testNumberOfSimons);
      for(var i = 0; i < testNumberOfSimons; i++) {
        expect(wrapper.find('[id="simon_' + i + '"]')).to.have.length(1);
      };
    });

    it('assigns different Simons different colors', () => {
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
