export const toBeCachedApiResponse = ['GET_TOURNAMENT_LEADERS_REQUEST', 'GET_TOURNAMENT_PRIZES_REQUEST'];

export const cacheApiResponse = (response) => {
	const { meta: { cacheKey = '' }, payload } = response;
	if (toBeCachedApiResponse.includes(cacheKey) && !sessionStorage.getItem(cacheKey)) {
		const responseToBeCached = {
			createdTimeStamp: Date.now(),
			response: payload,
		};
		sessionStorage.setItem(cacheKey, JSON.stringify(responseToBeCached));
	}
};
