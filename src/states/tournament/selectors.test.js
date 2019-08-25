import { getPrizes, getLeadersWithPosition } from './selectors';


describe('selectors', () => {
	it('getLeaders should return leaders', () => {
		const state = {
			tournament: {
				leaders: [],
			},
		};
		expect(getLeadersWithPosition(state)).toMatchSnapshot();
	});

	it('getPrizes should return prizes', () => {
		const state = {
			tournament: {
				prizes: [],
			},
		};
		expect(getPrizes(state)).toMatchSnapshot();
	});
});
