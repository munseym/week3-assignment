import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Payment from './Payment';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Payment payment={{cost: 105, description: "Free cancellation"}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<Payment payment={{cost: 105, description: "Free cancellation"}}/>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});

it('text has cost and description', () => {
    const wrapper = shallow(<Payment payment={{cost: 105, description: "Free cancellation"}}/>);
    expect(wrapper.text()).toEqual('Cost: 105, Free cancellation');
});

it('has a div', () => {
    const wrapper = shallow(<Payment payment={{cost: 105, description: "Free cancellation"}}/>);
    expect(wrapper.contains(<div />) );
});