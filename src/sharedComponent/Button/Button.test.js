import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Button name="button" onClick={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should call onClick on button click', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<Button name="button" onClick={onClick} />);
		wrapper.find('button').simulate('click');
		expect(onClick).toBeCalled();
	});
});
