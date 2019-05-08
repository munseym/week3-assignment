import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Location from './Location';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Location location={{city: "Seattle", country: "USA"}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<Location location={{city: "Seattle", country: "USA"}}/>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});

it('text has stars and reviews', () => {
    const wrapper = shallow(<Location location={{city: "Seattle", country: "USA"}}/>);
    expect(wrapper.text()).toEqual('Seattle, USA');
});

it('has a div', () => {
    const wrapper = shallow(<Location location={{city: "Seattle", country: "USA"}}/>);
    expect(wrapper.contains(<div />) );
});