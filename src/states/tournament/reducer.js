import { GET_TOURNAMENT_LEADERS_SUCCESS, GET_TOURNAMENT_PRIZES_SUCCESS } from './actions';


const initialState = {
	leaders: [],
	prizes: [],
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_TOURNAMENT_LEADERS_SUCCESS:
		return {
			...state,
			leaders: action.payload,
		};
	case GET_TOURNAMENT_PRIZES_SUCCESS:
		return {
			...state,
			prizes: action.payload,
		};
	default:
		return state;
	}
};
export default reducer;
