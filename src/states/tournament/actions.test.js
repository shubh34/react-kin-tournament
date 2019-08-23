import { fetchTournamentLeaders, fetchTournamentPrizes } from './actions';

describe('Tournament actions', () => {
	it('should create action to fetch leader', () => {
		expect(fetchTournamentLeaders()).toMatchSnapshot();
	});
	it('should create action to fetch prizes', () => {
		expect(fetchTournamentPrizes()).toMatchSnapshot();
	});
})
;