import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers';

export default (initialState = {}) => {
	const composedEnhancers = composeWithDevTools();
	return createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(apiMiddleware),
			composedEnhancers,
		),
	);
};
