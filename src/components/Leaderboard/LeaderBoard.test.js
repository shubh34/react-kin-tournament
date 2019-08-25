import React from 'react';
import { shallow } from 'enzyme';

import LeaderBoard from './LeaderBoard';
import { defaultLeaders } from '../../../tests/leaders';

const setUp = (setUpProps = {}, container = shallow) => {
	const props = {
		leaders: defaultLeaders.slice(0, 4),
		userId: 18,
		...setUpProps,
	};
	const wrapper = container(<LeaderBoard {...props} />);
	return { wrapper, props };
};

describe('LeaderBoard', () => {
	it('should render leaders of tournament with user as active row', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render leaders of tournament with no active user', () => {
		const { wrapper } = setUp({ userId: 110 });
		expect(wrapper).toMatchSnapshot();
	});
});
