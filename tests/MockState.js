import { defaultLeaders } from './leaders';
import { defaultPrizes } from './prizes';

export const defaultState = {
	userDetails: {
		userId: 1,
	},
	tournament: {
		leaders: [],
		prizes: [],
	},

};

export const tournamentState = {
	...defaultState,
	tournament: {
		leaders: defaultLeaders,
		prizes: defaultPrizes,
	},
};

export const getMockState = (state = 'DEFAULT') => {
	const mockStates = {
		DEFAULT: tournamentState,
	};
	return mockStates[state];
};
