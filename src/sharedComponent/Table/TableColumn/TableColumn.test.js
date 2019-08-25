import React from 'react';
import { shallow } from 'enzyme';
import TableColumn from './TableColumn';

describe('TableColumn', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TableColumn> TableColumn </TableColumn>);
		expect(wrapper).toMatchSnapshot();
	});
});
