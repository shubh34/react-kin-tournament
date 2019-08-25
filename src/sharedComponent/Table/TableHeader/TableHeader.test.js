import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';

describe('TableHeader', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TableHeader> Table Header </TableHeader>);
		expect(wrapper).toMatchSnapshot();
	});
});
