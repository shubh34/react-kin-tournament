export const defaultLeaders = [
	{
		playerId: 3,
		score: 87,
	},
	{
		playerId: 18,
		score: 86,
	},
	{
		playerId: 2,
		score: 75,
	},
	{
		playerId: 5,
		score: 75,
	},
	{
		playerId: 11,
		score: 73,
	},
	{
		playerId: 13,
		score: 61,
	},
	{
		playerId: 1,
		score: 28,
	},
	{
		playerId: 14,
		score: 23,
	},
].map((leader, index) => ({
	...leader,
	position: index + 1,
}));
export const leadersWithoutUserParticipation = [
	{
		playerId: 3,
		score: 87,
	},
	{
		playerId: 18,
		score: 86,
	},
	{
		playerId: 2,
		score: 75,
	},
	{
		playerId: 5,
		score: 75,
	},
].map((leader, index) => ({
	...leader,
	position: index + 1,
}));


export const leadersWithUserAtTop = [
	{
		playerId: 1,
		score: 99,
	},
	{
		playerId: 3,
		score: 87,
	},
	{
		playerId: 18,
		score: 86,
	},
	{
		playerId: 2,
		score: 75,
	},
	{
		playerId: 5,
		score: 75,
	},
].map((leader, index) => ({
	...leader,
	position: index + 1,
}));


export const leadersWithUserInTopFour = [
	{
		playerId: 3,
		score: 87,
	},
	{
		playerId: 18,
		score: 86,
	},
	{
		playerId: 1,
		score: 79,
	},
	{
		playerId: 2,
		score: 75,
	},
	{
		playerId: 5,
		score: 75,
	},
].map((leader, index) => ({
	...leader,
	position: index + 1,
}));
