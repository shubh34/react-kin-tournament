import React from 'react';
import { shallow } from 'enzyme';
import TableBody from './TableBody';

describe('TableBody', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TableBody>TableBody</TableBody>);
		expect(wrapper).toMatchSnapshot();
	});
});
