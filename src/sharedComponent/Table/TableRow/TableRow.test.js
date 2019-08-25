import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

describe('TableRow', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TableRow><td>td </td></TableRow>);
		expect(wrapper).toMatchSnapshot();
	});
	it('renders the active class', () => {
		const wrapper = shallow(<TableRow isActive><td>td </td></TableRow>);
		expect(wrapper).toMatchSnapshot();
	});
});
