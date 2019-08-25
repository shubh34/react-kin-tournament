import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store';

import Tournament from '../Tournament/Tournament';


const store = configureStore();

const App = () => (
	<Provider store={store}>
		<Tournament />
	</Provider>
);

export default App;
