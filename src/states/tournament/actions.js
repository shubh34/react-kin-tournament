import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';
import { cacheApiResponse } from '../../utils/cacheApiUtils';

export const GET_TOURNAMENT_LEADERS_REQUEST = 'GET_TOURNAMENT_LEADERS_REQUEST';
export const GET_TOURNAMENT_LEADERS_SUCCESS = 'GET_TOURNAMENT_LEADERS_SUCCESS';
export const GET_TOURNAMENT_LEADERS_FAILURE = 'GET_TOURNAMENT_LEADERS_FAILURE';

export const GET_TOURNAMENT_PRIZES_REQUEST = 'GET_TOURNAMENT_PRIZES_REQUEST';
export const GET_TOURNAMENT_PRIZES_SUCCESS = 'GET_TOURNAMENT_PRIZES_SUCCESS';
export const GET_TOURNAMENT_PRIZES_FAILURE = 'GET_TOURNAMENT_PRIZES_FAILURE';

export const createFetchLeaderRSSAAction = () => {
	const endPoint = endPoints.getLeaderBoard;
	return {
		[RSAA]: {
			endpoint: endPoint.url,
			method: endPoint.method,
			types: [
				GET_TOURNAMENT_LEADERS_REQUEST,
				{
					type: GET_TOURNAMENT_LEADERS_SUCCESS,
					meta: {
						cacheKey: GET_TOURNAMENT_LEADERS_REQUEST,
					},
				},
				GET_TOURNAMENT_LEADERS_FAILURE,
			],
		},
	};
};

export const createFetchPrizesRSSAAction = () => {
	const endPoint = endPoints.fetchTournamentPrizes;
	return {
		[RSAA]: {
			endpoint: endPoint.url,
			method: endPoint.method,
			types: [
				GET_TOURNAMENT_PRIZES_REQUEST,
				{
					type: GET_TOURNAMENT_PRIZES_SUCCESS,
					meta: {
						cacheKey: GET_TOURNAMENT_PRIZES_REQUEST,
					},
				},
				GET_TOURNAMENT_PRIZES_FAILURE,
			],
		},
	};
}
export const fetchTournamentLeaders = () => (dispatch) => {
	const fetchLeaderRSSAAction = createFetchLeaderRSSAAction();
	return dispatch(fetchLeaderRSSAAction).then((response) => {
		cacheApiResponse(response);
	});
};

export const fetchTournamentPrizes = () => (dispatch) => {
	const fetchPrizesRSSAAction = createFetchPrizesRSSAAction();
	return dispatch(fetchPrizesRSSAAction).then((response) => {
		cacheApiResponse(response);
	});
};
