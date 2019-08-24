
import get from 'lodash/get';
import { GET_TOURNAMENT_LEADERS_REQUEST, GET_TOURNAMENT_PRIZES_REQUEST } from '../../states/tournament/actions';

export const toBeCachedApiResponse = [GET_TOURNAMENT_LEADERS_REQUEST, GET_TOURNAMENT_PRIZES_REQUEST];


export const createApiResonseCachedMiddleware = () => () => next => (action) => {
	if (toBeCachedApiResponse.includes(action.type) && !sessionStorage.getItem(get(action, 'meta.cachedKey'))) {
		const responseToBeCached = {
			createdTimeStamp: Date.now(),
			response: action.payload,
			status: action.status,
		};
		sessionStorage.setItem(action.meta.cachedKey, responseToBeCached);
	}
	return next(action);
};
