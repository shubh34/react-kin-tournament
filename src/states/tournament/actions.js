import { RSAA } from 'redux-api-middleware';
import endPoints from '../../configs/endPoints';

export const GET_TOURNAMENT_LEADERS_REQUEST = 'GET_TOURNAMENT_LEADERS_REQUEST';
export const GET_TOURNAMENT_LEADERS_SUCCESS = 'GET_TOURNAMENT_LEADERS_SUCCESS';
export const GET_TOURNAMENT_LEADERS_FAILURE = 'GET_TOURNAMENT_LEADERS_FAILURE';

export const GET_TOURNAMENT_PRIZES_REQUEST = 'GET_TOURNAMENT_PRIZES_REQUEST';
export const GET_TOURNAMENT_PRIZES_SUCCESS = 'GET_TOURNAMENT_PRIZES_SUCCESS';
export const GET_TOURNAMENT_PRIZES_FAILURE = 'GET_TOURNAMENT_PRIZES_FAILURE';

export const fetchTournamentLeaders = () => {
	const endPoint = endPoints.getLeaderBoard;
	return {
		[RSAA]: {
			endpoint: endPoint.url,
			method: endPoint.method,
			types: [
				GET_TOURNAMENT_LEADERS_REQUEST,
				GET_TOURNAMENT_LEADERS_SUCCESS,
				GET_TOURNAMENT_LEADERS_FAILURE,
			],
		},
	};
};

export const fetchTournamentPrizes = () => {
	const endPoint = endPoints.fetchTournamentPrizes;
	return {
		[RSAA]: {
			endpoint: endPoint.url,
			method: endPoint.method,
			types: [
				GET_TOURNAMENT_PRIZES_REQUEST,
				GET_TOURNAMENT_PRIZES_SUCCESS,
				GET_TOURNAMENT_PRIZES_FAILURE,
			],
		},
	};
};
