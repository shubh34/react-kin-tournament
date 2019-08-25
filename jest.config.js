module.exports = {
	clearMocks: true,
	collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
	coverageDirectory: 'coverage',
	moduleFileExtensions: ['js', 'json', 'jsx'],
	setupFiles: ['<rootDir>/tools/setupTests.js'],
	testEnvironment: 'jsdom',
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	testURL: 'http://localhost',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false,
	moduleNameMapper: {
		'\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	snapshotSerializers: ['enzyme-to-json/serializer'],
};
