import React from 'react';
import Enzyme,{ shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Error from "../pages/Error";
Enzyme.configure({ adapter: new Adapter() })

describe('Error 404', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Error />).find('.error').exists()).toBe(true)
  })
});
