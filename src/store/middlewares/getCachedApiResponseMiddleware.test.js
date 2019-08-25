import { RSAA } from 'redux-api-middleware';
import { getCachedApiResponseMiddleware } from './getCachedApiResponseMiddleware';
import { cacheApiResponse } from '../../utils/cacheApiUtils';


const setup = (
	next = jest.fn(),
) => ({
	next,
	middleware: getCachedApiResponseMiddleware()()(next),
});

describe('getCachedApiResponseMiddleware', () => {
	it('calls next with original action if not RSAA action', () => {
		const { middleware, next } = setup();
		const action = {
			type: 'DEMO_TEST',
		};

		middleware(action);
		expect(next).toBeCalledWith(action);
	});

	it('should call the api when the response is not stored in session storage', () => {
		const { middleware, next } = setup();
		const response = {
			meta: { cacheKey: 'GET_TOURNAMENT_LEADERS_REQUEST' },
			payload: { test: 'new Response' },
		};
		cacheApiResponse(response);
		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
				types: ['GET_TOURNAMENT_LEADERS_REQUEST'],
			},

		};

		middleware(action);

		expect(next).toMatchSnapshot();
	});
	it('should call the the api when the response is in session storage', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
			},
		};

		middleware(action);

		expect(next).toBeCalledWith(
			expect.objectContaining({
				[RSAA]: {
					endpoint: 'test/RSAA',
				},
			}),
		);
	});
	it('should call the api when api cached createdTimeStamp is more than API_CACHE_TIMER', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
				types: ['GET_TOURNAMENT_PRIZES_REQUEST'],
			},
		};
		const apiResponse = {
			createdTimeStamp: '156673552',
			response: {
				test: 'test',
			},
		};
		sessionStorage.setItem('GET_TOURNAMENT_PRIZES_REQUEST', JSON.stringify(apiResponse));

		middleware(action);

		expect(next).toBeCalledWith(
			expect.objectContaining({
				[RSAA]: {
					endpoint: 'test/RSAA',
					types: ['GET_TOURNAMENT_PRIZES_REQUEST'],
				},

			}),
		);
    });
    
    it('should clear the sessionStorage api cached createdTimeStamp is more than API_CACHE_TIMER', () => {
		const { middleware, next } = setup();

		const action = {
			[RSAA]: {
				endpoint: 'test/RSAA',
				types: ['GET_TOURNAMENT_PRIZES_REQUEST'],
			},
		};
		const apiResponse = {
			createdTimeStamp: '156673552',
			response: {
				test: 'test',
			},
		};
		sessionStorage.setItem('GET_TOURNAMENT_PRIZES_REQUEST', JSON.stringify(apiResponse));

		middleware(action);

		expect(sessionStorage).toMatchSnapshot();
	});
});
