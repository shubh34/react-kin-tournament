import { createSelector } from 'reselect';
import get from 'lodash/get';
import head from 'lodash/head';

import { getUserId } from '../userDetails/selectors';
import { SHOW_TOP_LEADERS_LIMT } from '../../configs/config';

export const getPrizeSelector = state => get(state, 'tournament.prizes', []);

export const getLeadersSelector = state => get(state, 'tournament.leaders', []);

export const getPrizes = createSelector(getPrizeSelector, prizes => prizes.map((prize) => {
	const postionRange = (prize.toPosition - prize.fromPosition) > 0 ? `${prize.fromPosition}-${prize.toPosition}` : `${prize.fromPosition}`;
	return {
		...prize,
		prize: prize.prize.toFixed(2),
		range: postionRange,
	};
}));

export const getLeadersWithPosition = createSelector(getLeadersSelector,
	leaders => leaders.map((leader, index) => ({
		...leader,
		position: index + 1,
	})));

export const isUserPlayingTournament = createSelector(getLeadersSelector, getUserId, (leaders, userId) => leaders.some(leader => leader.playerId === userId));

export const getUserScore = createSelector(getLeadersWithPosition, getUserId, (getLeadersWithTheirPosition, userId) => getLeadersWithTheirPosition.find(leader => leader.playerId === userId));

export const isUserInTopPrizeRange = createSelector(getPrizes, getUserScore, (prizes, userScore) => {
	const { fromPosition = '', toPosition = '' } = head(prizes) || {};
	const userPosition = get(userScore, 'position', 0);
	return fromPosition <= userPosition && toPosition >= userPosition;
});


export const positionToReachForNextPrize = (prizes, position) => {
	const reversedPrizeList = [...prizes].reverse();
	return get(reversedPrizeList.find(prize => prize.toPosition < position), 'toPosition');
};


export const getUserNextAvailabelPrize = createSelector(getLeadersWithPosition, getPrizes, getUserScore, (leadersWithTheirPostion, prizes, userScore) => {
	const usersPosition = get(userScore, 'position', 0);
	const userPostionToBeComparedWith = positionToReachForNextPrize(prizes, usersPosition);
	return get(leadersWithTheirPostion[userPostionToBeComparedWith - 1], 'score', 0) - get(userScore, 'score', 0) + 1;
});


export const getPriceOnPosition = (prizes, position) => get(prizes.find(prize => (prize.fromPosition <= position && prize.toPosition >= position)), 'prize', '0.00');

export const getTopLeaders = createSelector(getLeadersWithPosition, getPrizes, getUserScore, getUserId, (getLeadersWithTheirPosition, prizes, userScore, userId) => {
	let topLeadersScore = getLeadersWithTheirPosition.slice(0, SHOW_TOP_LEADERS_LIMT);
	if (!!userScore && !topLeadersScore.some(leader => leader.playerId === userId)) {
		topLeadersScore = [...topLeadersScore.slice(0, (SHOW_TOP_LEADERS_LIMT - 1)), userScore];
	}
	return topLeadersScore.map(leadScorer => ({
		...leadScorer,
		prize: getPriceOnPosition(prizes, leadScorer.position),
	}));
});
