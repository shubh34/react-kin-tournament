import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Tournament from './Tournament';
import { getMockState } from '../../../tests/MockState';

const mockStore = configureStore();

const setUp = (state = 'DEFAULT', setUpProps = {}, container = shallow) => {
	const props = {
		...setUpProps,
	};
	const store = mockStore(getMockState(state));
	store.dispatch = jest.fn();
	const wrapper = container(<Tournament {...props} store={store} />);
	return { wrapper, props, store };
};

describe('Tournament', () => {
	it('renders without crashing', () => {
		const { wrapper } = setUp();
		expect(wrapper.dive().dive()).toMatchSnapshot();
	});
	it('component did mount should call apis', () => {
		const { store, wrapper } = setUp(undefined, {}, mount);
		expect(store.dispatch).toBeCalled();
		expect(wrapper).toMatchSnapshot();
	});
});
