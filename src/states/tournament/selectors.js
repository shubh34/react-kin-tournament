import get from 'lodash/get';

export const getPrizes = state => get(state, 'tournament.prizes', []);

export const getLeaders = state => get(state, 'tournament.leaders', []);
