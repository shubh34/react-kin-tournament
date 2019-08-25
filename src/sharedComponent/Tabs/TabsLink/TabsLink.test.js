import React from 'react';
import { shallow } from 'enzyme';
import TabsLink from './TabsLink';

describe('TabsLink', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TabsLink name="TabLink" onClick={jest.fn()} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('TabsLink when active', () => {
		const wrapper = shallow(<TabsLink name="TabLink" onClick={jest.fn()} isActive />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should call onClick on Tablink click', () => {
		const onClick = jest.fn();
		const wrapper = shallow(<TabsLink name="TabLink" onClick={onClick} isActive />);
		wrapper.find('Button').simulate('click');
		expect(onClick).toBeCalled();
	});
});
