import { getUserId } from './selectors';


describe('selectors', () => {
	it('getUserId should return userId', () => {
		const state = {
			userDetails: {
				userId: '1',
			},
		};
		expect(getUserId(state)).toBe('1');
	});
});
