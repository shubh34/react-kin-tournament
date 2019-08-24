import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { getCachedApiResponseMiddleware } from './middlewares/getCachedApiResponseMiddleware';


export default (initialState = {}) => {
	const composedEnhancers = composeWithDevTools();
	return createStore(
		reducers,
		initialState,
		compose(
			applyMiddleware(getCachedApiResponseMiddleware(), apiMiddleware, thunk),
			composedEnhancers,
		),
	);
};
