import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default (initialState = []) => {
	const composedEnhancers = composeWithDevTools();
	return createStore(reducers, initialState, composedEnhancers);
};
