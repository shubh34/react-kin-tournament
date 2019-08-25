import {
	getPrizes, getLeadersWithPosition, isUserPlayingTournament, getUserScore, isUserInTopPrizeRange, positionToReachForNextPrize, getPriceOnPosition, getTopLeaders,
} from './selectors';
import { defaultLeaders } from '../../../tests/leaders';
import { defaultPrizes } from '../../../tests/prizes';
import {
	userNotPatricipatingInTournament, inTopFourUserId, topUserId, userParticipatingInTournament, userInTopPrizeRange,
} from '../../../tests/users';

export const getState = state => ({
	userDetails: {
		userId: 1,
	},
	tournament: {
		leaders: defaultLeaders,
		prizes: defaultPrizes,
	},
	...state,
});

describe('selectors', () => {
	it('getLeaders should return leaders', () => {
		const state = getState();
		expect(getLeadersWithPosition(state)).toMatchSnapshot();
	});

	it('getPrizes should return prizes', () => {
		const state = getState();
		expect(getPrizes(state)).toMatchSnapshot();
	});
	describe('isUserPlayingTournament', () => {
		it('should return false when user is not playing', () => {
			const state = getState({
				userDetails: {
					userId: userNotPatricipatingInTournament,
				},
			});
			expect(isUserPlayingTournament(state)).toBe(false);
		});
		it('should return true when user is  playing', () => {
			const state = getState({
				userDetails: {
					userId: inTopFourUserId,
				},
			});
			expect(isUserPlayingTournament(state)).toBe(true);
		});
	});
	describe('isUserInTopPrizeRange', () => {
		it('should return false when user is not at top postion', () => {
			const state = getState({
				userDetails: {
					userId: inTopFourUserId,
				},
			});
			expect(isUserInTopPrizeRange(state)).toBe(false);
		});
		it('should return false when user is not playing the tournament', () => {
			const state = getState({
				userDetails: {
					userId: userNotPatricipatingInTournament,
				},
			});
			expect(isUserInTopPrizeRange(state)).toBe(false);
		});
		it('should return true when user is at top position', () => {
			const state = getState({
				userDetails: {
					userId: topUserId,
				},
			});
			expect(isUserInTopPrizeRange(state)).toBe(true);
		});
		it('should return true when user is not at top postion but in top prize range', () => {
			// userid 18 second in the leader board
			const state = getState({
				userDetails: {
					userId: userInTopPrizeRange,
				},
			});
			expect(isUserInTopPrizeRange(state)).toBe(true);
		});
	});
	describe('getUserScore', () => {
		it('should return user score', () => {
			const state = getState({
				userDetails: {
					userId: topUserId,
				},
			});
			expect(getUserScore(state)).toMatchSnapshot();
		});
	});

	describe('positionToReachForNextPrize', () => {
		it('should return postion from where the prize starts when user is not in prize list position', () => {
			// user in postion below 5
			const state = getState({
				userDetails: {
					userId: userParticipatingInTournament,
				},
			});
			expect(positionToReachForNextPrize(defaultPrizes, getUserScore(state).position)).toBe(5);
		});

		it('should return postion from where the next prize starts when user is in prize range but not at top', () => {
			// user in positon 5
			const state = getState({
				userDetails: {
					userId: inTopFourUserId,
				},
			});
			expect(positionToReachForNextPrize(defaultPrizes, getUserScore(state).position)).toBe(3);
		});
		it('should return undefined when at top', () => {
			// user in positon 1
			const state = getState({
				userDetails: {
					userId: topUserId,
				},
			});
			expect(positionToReachForNextPrize(defaultPrizes, getUserScore(state).position)).toBe(undefined);
		});
		it('should return undefined when user is not at top of leaderboard but in the top prize list', () => {
			// user in positon 2
			expect(positionToReachForNextPrize(defaultPrizes, 2)).toBe(undefined);
		});
	});

	describe('getPriceOnPosition', () => {
		it('should return zero when user is not in prize range', () => {
			// user in postion below 5
			const state = getState({
				userDetails: {
					userId: userParticipatingInTournament,
				},
			});
			expect(getPriceOnPosition(defaultPrizes, getUserScore(state).position)).toBe('0.00');
		});

		it('should return prize value when user in prize range', () => {
			const state = getState({
				userDetails: {
					userId: inTopFourUserId,
				},
			});
			expect(getPriceOnPosition(defaultPrizes, getUserScore(state).position)).toBe(1079);
		});
		it('should return top prize when user at top', () => {
			// user in positon 1
			expect(getPriceOnPosition(defaultPrizes, 3)).toBe(5483);
		});
		it('should return mid prize when user is in between top and bottom', () => {
			// user in positon 1
			const state = getState({
				userDetails: {
					userId: topUserId,
				},
			});
			expect(getPriceOnPosition(defaultPrizes, getUserScore(state).position)).toBe(10836);
		});
		it('should return top prize when user is not at top of leaderboard but in the top prize list', () => {
			// user in positon 2
			expect(getPriceOnPosition(defaultPrizes, 2)).toBe(10836);
		});
	});
	describe('getTopLeaders', () => {
		it('should return top 4 player when user is not participating', () => {
			// userid -100 not participating
			const state = getState({
				userDetails: {
					userId: userNotPatricipatingInTournament,
				},
			});
			expect(getTopLeaders(state)).toMatchSnapshot();
		});

		it('should return user in 4th position when user is playing the tournament but not in top list', () => {
			// userid 1 in postion below 5
			const state = getState({
				userDetails: {
					userId: userParticipatingInTournament,
				},
			});
			expect(getTopLeaders(state)).toMatchSnapshot();
		});
		it('should return user in in between leaders board', () => {
			// userid 5 in top 4
			const state = getState({
				userDetails: {
					userId: inTopFourUserId,
				},
			});
			expect(getTopLeaders(state)).toMatchSnapshot();
		});
		it('should return user is top postion', () => {
			// userid 3 in positon 1
			const state = getState({
				userDetails: {
					userId: topUserId,
				},
			});
			expect(getTopLeaders(state)).toMatchSnapshot();
		});
	});
});
