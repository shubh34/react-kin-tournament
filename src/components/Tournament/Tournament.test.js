import React from 'react';
import { shallow } from 'enzyme';

import { Tournament } from './Tournament';
import { userParticipatingInTournament } from '../../../tests/users';
import { defaultPrizes } from '../../../tests/prizes';
import { defaultLeaders } from '../../../tests/leaders';
import { getTopLeaders } from '../../states/tournament/selectors';

const state = {
	tournament: {
		leaders: defaultLeaders,
		prizes: defaultPrizes,
	},
	userDetails: {
		userId: userParticipatingInTournament,
	},
};

const setUp = (setUpProps = {}, container = shallow) => {
	const props = {
		fetchLeaders: jest.fn(),
		fetchPrizes: jest.fn(),
		userId: userParticipatingInTournament,
		prizes: defaultPrizes,
		leaders: getTopLeaders(state),
		isUserPlayingTournament: true,
		isUserInTopPrizeRange: false,
		userNextAvailabelPrize: 44,
		...setUpProps,
	};
	const wrapper = container(<Tournament {...props} />);
	return { wrapper, props };
};

describe('Tournament', () => {
	it('renders without crashing', () => {
		const { wrapper } = setUp();
		expect(wrapper).toMatchSnapshot();
	});
	it('component did mount should call apis', () => {
		const { props } = setUp({}, shallow);
		expect(props.fetchLeaders).toBeCalled();
		expect(props.fetchPrizes).toBeCalled();
	});
	it('should active prizes when prize tab is clicked', () => {
		const { wrapper } = setUp({}, shallow);
		wrapper.instance().onTablinkChange({
			target: {
				name: 'Prizes',
			},
		});
		expect(wrapper).toMatchSnapshot();
	});

	it('should not render nextAvailable prize when at Top postion', () => {
		const { wrapper } = setUp({ isUserInTopPrizeRange: true }, shallow);
		expect(wrapper.find('p').exists()).toBe(false);
	});
});
