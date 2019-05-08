import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Rating from './Rating';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating rating={{stars: 3, reviews: 2}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<Rating rating={{stars: 3, reviews: 2}}/>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});

it('text has stars and reviews', () => {
    const wrapper = shallow(<Rating rating={{stars: 3, reviews: 2}}/>);
    expect(wrapper.text()).toEqual('3 stars 2 reviews');
});

it('has a div', () => {
    const wrapper = shallow(<Rating rating={{stars: 3, reviews: 2}}/>);
    expect(wrapper.contains(<div />) );
});