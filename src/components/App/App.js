import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';

import LayoutContainer from '../LayoutContainer/LayoutContainer';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<LayoutContainer />
	</Provider>
);

export default App;
