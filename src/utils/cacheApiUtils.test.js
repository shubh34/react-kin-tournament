import { cacheApiResponse } from './cacheApiUtils';

Date.now = jest.fn(() => 1566735528409);

describe('cacheApiUtils', () => {
	it('should not cache the Api response when its not in toBeCachedApiResponse list', () => {
		const response = {
			meta: { cacheKey: 'NOT_LISTED_API_RESPONSE' },
			payload: { test: 'new Response' },
		};
		cacheApiResponse(response);
		expect(sessionStorage).toMatchSnapshot();
	});

	it('should cache the Api response', () => {
		const response = {
			meta: { cacheKey: 'GET_TOURNAMENT_LEADERS_REQUEST' },
			payload: { test: 'test' },
		};
		cacheApiResponse(response);
		expect(sessionStorage).toMatchSnapshot();
	});
	it('should not cache the Api response when already cached', () => {
		const response = {
			meta: { cacheKey: 'GET_TOURNAMENT_LEADERS_REQUEST' },
			payload: { test: 'new Response' },
		};
		cacheApiResponse(response);
		expect(sessionStorage).toMatchSnapshot();
	});
});
