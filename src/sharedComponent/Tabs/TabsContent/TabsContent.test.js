
import React from 'react';
import { shallow } from 'enzyme';
import TabsContent from './TabsContent';

describe('TabsContent', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<TabsContent>TabsContent</TabsContent>);
		expect(wrapper).toMatchSnapshot();
	});
});
