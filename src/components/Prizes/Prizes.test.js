import React from 'react';
import { shallow } from 'enzyme';

import Prizes from './Prizes';
import { defaultPrizes } from '../../../tests/prizes';

const setUp = (setUpProps = {}, container = shallow) => {
	const props = {
		prizes: defaultPrizes,
		...setUpProps,
	};
	const wrapper = container(<Prizes {...props} />);
	return { wrapper, props };
};

describe('Prizes', () => {
	it('should render prizes', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
});
