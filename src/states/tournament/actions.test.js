import configureStore from 'redux-mock-store';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import {
	fetchTournamentLeaders, fetchTournamentPrizes, createFetchPrizesRSSAAction, createFetchLeaderRSSAAction,
} from './actions';

import { cacheApiResponse } from '../../utils/cacheApiUtils';

jest.mock('../../utils/cacheApiUtils');

const mockStore = configureStore([apiMiddleware, thunk]);

describe('Tournament actions', () => {
	it('should return RSSAA action to fetch leader', () => {
		expect(createFetchLeaderRSSAAction()).toMatchSnapshot();
	});
	it('should create action to fetch prizes', () => {
		expect(createFetchPrizesRSSAAction()).toMatchSnapshot();
	});
	it('fetchTournamentLeaders should call api to fetch leaders', () => {
		const store = mockStore();
		return store.dispatch(fetchTournamentLeaders()).then(() => {
			expect(cacheApiResponse).toBeCalled();
		});
	});
	it('fetchTournamentPrizes should call api to fetch prizes', () => {
		const store = mockStore();
		return store.dispatch(fetchTournamentPrizes()).then(() => {
			expect(cacheApiResponse).toBeCalled();
		});
	});
});
