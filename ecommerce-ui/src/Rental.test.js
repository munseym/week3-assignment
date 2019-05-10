import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import RentalList from './RentalList';
import Rental from './Rental';
import airbnbs from './airbnbs.json';
import { exportAllDeclaration } from '@babel/types';

const rentalList = <RentalList rentals={airbnbs}/>;
const rentalArray = rentalList.props.rentals
.map((rental, idx) => {
    return (
        <Rental
            rental={rental}
            onClick={rentalList.props.onAddRental}
            idx={idx}
            key={idx}
            buttonText='Add to cart'
        />
    );
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(rentalArray.pop(), div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(rentalArray.pop());
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props('children')).toBeDefined();
});