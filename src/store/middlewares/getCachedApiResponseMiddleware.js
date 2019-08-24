/* eslint-disable import/no-mutable-exports */
import { isRSAA, RSAA } from 'redux-api-middleware';
import head from 'lodash/head';

import { API_CACHE_TIMER } from '../../configs/config';


export const getCachedApiResponseMiddleware = () => () => next => (action) => {
	if (!isRSAA(action)) {
		return next(action);
	}
	const cachedApiResponseString = sessionStorage.getItem(head(action[RSAA].types));
	if (cachedApiResponseString) {
		const cachedApiResponse = JSON.parse(cachedApiResponseString);
		if (Date.now() - cachedApiResponse.createdTimeStamp < API_CACHE_TIMER) {
			const nextAction = {
				[RSAA]: {
					...action[RSAA],
					fetch: async () => new Response(JSON.stringify(cachedApiResponse.response),
						{
							status: 200,
							headers: {
								'Content-Type': 'application/json',
							},
						}),
				},
			};
			return next(nextAction);
		}
		sessionStorage.clear(action[RSAA].endpoint);
	}

	return next(action);
};
