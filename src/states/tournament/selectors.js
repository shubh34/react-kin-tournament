import { createSelector } from 'reselect';
import get from 'lodash/get';
import head from 'lodash/head';
import findIndex from 'lodash/findIndex';
import { getUserId } from '../userDetails/selectors';
import { SHOW_TOP_LEADERS_LIMT } from '../../configs/config';

export const getPrizes = state => get(state, 'tournament.prizes', []);

export const getLeaders = state => get(state, 'tournament.leaders', []);

export const getLeadersWithPosition = createSelector(getLeaders,
	leaders => leaders.map((leader, index) => ({
		...leader,
		postion: index + 1,
	})));

export const isUserPlayingTournament = state => getLeaders(state).some(leader => leader.playerId === getUserId(state));

export const isUserAtTopPostion = state => get(head(getLeadersWithPosition(state)), 'playerId') === getUserId(state);


export const getUserScore = state => getLeadersWithPosition(state).find(leader => leader.playerId === getUserId(state));

// Need to update
export const getUserNextAvailabelPrize = (state) => {
	const usersPostion = findIndex(getLeadersWithPosition(state), { playerId: getUserId(state) });
	const userPostionToBeComparedWith = usersPostion > SHOW_TOP_LEADERS_LIMT ? SHOW_TOP_LEADERS_LIMT : usersPostion - 1;
	return get(getLeadersWithPosition(state)[userPostionToBeComparedWith], 'score', 0) - get(getUserScore(state), 'score', 0);
};

export const getTopLeaders = (state) => {
	const leaders = getLeadersWithPosition(state);
	const topLeadersScore = leaders.slice(0, SHOW_TOP_LEADERS_LIMT);
	const userScore = getUserScore(state);
	if (!!userScore && !topLeadersScore.some(leader => leader.playerId === getUserId(state))) {
		return [...topLeadersScore.slice(0, (SHOW_TOP_LEADERS_LIMT - 1)), userScore];
	}
	return topLeadersScore;
};
