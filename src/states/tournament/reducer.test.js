import reducer from './reducer';

describe('reducer', () => {
	it('should return initail state', () => {
		expect(reducer(undefined, { type: 'RESET' })).toEqual({ leaders: [], prizes: [] });
	});
});
