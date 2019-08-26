import './Tournament.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTournamentLeaders, fetchTournamentPrizes } from '../../states/tournament/actions';
import {
	getPrizes, getTopLeaders, isUserInTopPrizeRange, getUserNextAvailabelPrize, isUserPlayingTournament,
} from '../../states/tournament/selectors';
import { API_CACHE_TIMER } from '../../configs/config';
import Tabs from '../../sharedComponent/Tabs';
import LeaderBoard from '../Leaderboard/LeaderBoard';
import Prizes from '../Prizes/Prizes';
import { getUserId } from '../../states/userDetails/selectors';
import content from './Tournament.content';

export const tourmamentTabs = {
	LEADERBOARD: 'Leaderboard',
	PRIZES: 'Prizes',
};
const mapDispatch = dispatch => ({
	fetchLeaders: () => dispatch(fetchTournamentLeaders()),
	fetchPrizes: () => dispatch(fetchTournamentPrizes()),
});
const mapState = state => ({
	userId: getUserId(state),
	prizes: getPrizes(state),
	leaders: getTopLeaders(state),
	isUserPlayingTournament: isUserPlayingTournament(state),
	isUserInTopPrizeRange: isUserInTopPrizeRange(state),
	userNextAvailabelPrize: getUserNextAvailabelPrize(state),
});

// Question : should we clear setInterval on unmount

export class Tournament extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: tourmamentTabs.LEADERBOARD,
		};
		this.fetchTournamentDetails = this.fetchTournamentDetails.bind(this);
		this.onTablinkChange = this.onTablinkChange.bind(this);
	}


	componentDidMount() {
		this.fetchTournamentDetails();
		setInterval(this.fetchTournamentDetails, API_CACHE_TIMER);
	}

	onTablinkChange(event) {
		this.setState({
			activeTab: event.target.name,
		});
	}

	fetchTournamentDetails() {
		const { fetchLeaders, fetchPrizes } = this.props;
		fetchLeaders();
		fetchPrizes();
	}

	render() {
		const { activeTab } = this.state;
		const {
			leaders, userNextAvailabelPrize, isUserInTopPrizeRange, userId, prizes, isUserPlayingTournament,
		} = this.props;
		const isLeaderboardActive = activeTab === tourmamentTabs.LEADERBOARD;
		const userNextAvailabelPrizeText = content.gainNexAvaliablePrizeText.replace(':next-avail-prize', userNextAvailabelPrize);
		const showNextAvailablePrizeText = isUserPlayingTournament && !isUserInTopPrizeRange;
		return (
			<div className="c-tournament">
				<Tabs>
					<Tabs.TabsLink name={tourmamentTabs.LEADERBOARD} onClick={this.onTablinkChange} isActive={isLeaderboardActive} />
					<Tabs.TabsLink name={tourmamentTabs.PRIZES} onClick={this.onTablinkChange} isActive={!isLeaderboardActive} />
					<Tabs.TabsContent>
						{isLeaderboardActive && <LeaderBoard leaders={leaders} userId={userId} />}
						{!isLeaderboardActive && <Prizes prizes={prizes} />}
						{showNextAvailablePrizeText && <p className="c-tournament-information">{userNextAvailabelPrizeText}</p>}
					</Tabs.TabsContent>
				</Tabs>
			</div>
		);
	}
}
Tournament.propTypes = {
	fetchLeaders: PropTypes.func.isRequired,
	fetchPrizes: PropTypes.func.isRequired,
	leaders: PropTypes.arrayOf(PropTypes.shape({
		position: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired,
		prize: PropTypes.string.isRequired,
	})),
	prizes: PropTypes.arrayOf(PropTypes.shape({
		prize: PropTypes.string.isRequired,
		range: PropTypes.string.isRequired,
	})),
	userNextAvailabelPrize: PropTypes.number.isRequired,
	isUserInTopPrizeRange: PropTypes.bool.isRequired,
	isUserPlayingTournament: PropTypes.bool.isRequired,
	userId: PropTypes.number.isRequired,
};

export default connect(mapState, mapDispatch)(Tournament);
