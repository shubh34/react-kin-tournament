import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import Tournament from '../Tournament/Tournament';


const App = () => (
	<Provider store={configureStore()}>
		<Tournament />
	</Provider>
);

export default App;
