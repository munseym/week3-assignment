import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import RentalList from './RentalList';
import airbnbs from './airbnbs.json';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RentalList rentals={airbnbs}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<RentalList rentals={airbnbs}/>);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props('children')).toBeDefined();
});