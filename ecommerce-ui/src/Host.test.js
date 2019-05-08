import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Host from './Host';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Host host={{name: "John Smith", isSuperhost: true}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<Host host={{name: "John Smith", isSuperhost: true}}/>);
  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});

it('text has host name and is super host', () => {
    const wrapper = shallow(<Host host={{name: "John Smith", isSuperhost: true}}/>);
    expect(wrapper.text()).toEqual('John Smith, Superhost');
});

it('handles host who is not super host', () => {
    const wrapper = shallow(<Host host={{name: "John Smith", isSuperhost: false}}/>);
    expect(wrapper.text()).toEqual('John Smith');
});

it('handles host with a long name', () => {
    const wrapper = shallow(<Host host={{name: "John Jacob Jingleheimer Schmidt His name is my name, too", isSuperhost: false}}/>);
    expect(wrapper.text()).toEqual('John Jacob Jingleheimer Schmidt His name is my name, too');
});

it('has a div', () => {
    const wrapper = shallow(<Host host={{name: "John Smith", isSuperhost: true}}/>);
    expect(wrapper.contains(<div />) );
});