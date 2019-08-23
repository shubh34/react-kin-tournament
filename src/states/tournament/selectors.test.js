import { getPrizes, getLeaders } from './selectors';


describe('selectors', () => {
	it('getLeaders should return leaders', () => {
		const state = {
			tournament: {
				leaders: [],
			},
		};
		expect(getLeaders(state)).toMatchSnapshot();
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
