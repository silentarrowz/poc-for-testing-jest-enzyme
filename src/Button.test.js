import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });

	it('should toggle second button’s disabled state when clicking on first button', () => {
  const wrapper = shallow(<Button />);
  const firstButton = wrapper.find('button.first');
    const secondButton = wrapper.find('button').at(1);
    console.log(secondButton.debug());
    firstButton.simulate('click');
    console.log(secondButton.debug());
    console.log(firstButton.debug());
  expect(secondButton.props().disabled).toEqual(false);
  
  firstButton.simulate('click');
      console.log(secondButton.debug());
      
      //console.log(wrapper.update().debug());
  expect(wrapper.update().find('button').at(1).props().disabled).toEqual(true);
}); 
