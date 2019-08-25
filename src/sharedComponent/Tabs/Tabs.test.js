
import React from 'react';
import { shallow } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Tabs>Tabs Children</Tabs>);
		expect(wrapper).toMatchSnapshot();
	});
});
