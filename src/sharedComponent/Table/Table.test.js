import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('Table', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Table> Hie</Table>);
		expect(wrapper).toMatchSnapshot();
	});
});
