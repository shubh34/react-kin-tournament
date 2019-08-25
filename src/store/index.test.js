import configureStore from './index';

describe('configureStore', () => {
	it('should creat store', () => {
		const store = configureStore();
		expect(store).toMatchSnapshot();
	});
});
