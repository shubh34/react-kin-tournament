import { combineReducers } from 'redux';
import tournament from '../../states/tournament/reducer';
import userDetails from '../../states/userDetails/reducer';

export default combineReducers({ tournament, userDetails });
