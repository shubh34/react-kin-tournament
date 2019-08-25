import reducer from './reducer';
import { defaultLeaders } from '../../../tests/leaders';
import { defaultPrizes } from '../../../tests/prizes';

describe('reducer', () => {
	it('should return initail state', () => {
		expect(reducer(undefined, { type: 'RESET' })).toEqual({ leaders: [], prizes: [] });
	});
	it('should return initail state', () => {
		expect(reducer(undefined, { type: 'RESET' })).toEqual({ leaders: [], prizes: [] });
	});
	it('should handle get tournament leader api success ', () => {
		expect(reducer(undefined, { type: 'GET_TOURNAMENT_LEADERS_SUCCESS', payload: defaultLeaders })).toEqual({ leaders: defaultLeaders, prizes: [] });
	});
	it('should handle get tournament prizes api success ', () => {
		expect(reducer(undefined, { type: 'GET_TOURNAMENT_PRIZES_SUCCESS', payload: defaultPrizes })).toEqual({ leaders: [], prizes: defaultPrizes });
	});
});
