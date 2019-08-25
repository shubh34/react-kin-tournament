import './Tournament.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTournamentLeaders, fetchTournamentPrizes } from '../../states/tournament/actions';
import {
	getPrizes, getTopLeaders, isUserAtTopPostion, getUserNextAvailabelPrize,
} from '../../states/tournament/selectors';
import { API_CACHE_TIMER } from '../../configs/config';
import Tabs from '../../sharedComponent/Tabs';
import LeaderBoard from '../Leaderboard/LeaderBoard';
import Prizes from '../Prizes/Prizes';
import { getUserId } from '../../states/userDetails/selectors';

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
	isUserAtTopPostion: isUserAtTopPostion(state),
	userNextAvailabelPrize: getUserNextAvailabelPrize(state),
});
export class Tournament extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: tourmamentTabs.LEADERBOARD,
		};
		this.fetchTournamentDetails = this.fetchTournamentDetails.bind(this);
	}

	componentDidMount() {
		this.fetchTournamentDetails();
		setInterval(this.fetchTournamentDetails, API_CACHE_TIMER);
	}

	fetchTournamentDetails() {
		const { fetchLeaders, fetchPrizes } = this.props;
		fetchLeaders();
		fetchPrizes();
	}

	render() {
		const { activeTab } = this.state;
		const { leaders, userNextAvailabelPrize, isUserAtTopPostion, userId, prizes } = this.props;
		const isLeaderboardActive = activeTab === tourmamentTabs.LEADERBOARD;
		return (
			<div className="c-tournament">
				<Tabs>
					<Tabs.TabsLink name="LeaderBoard" onClick={() => { this.setState({ activeTab: tourmamentTabs.LEADERBOARD }); }} isActive={isLeaderboardActive} />
					<Tabs.TabsLink name="Prizes" onClick={() => { this.setState({ activeTab: tourmamentTabs.PRIZES }); }} isActive={!isLeaderboardActive} />
					<Tabs.TabsContent>
						{isLeaderboardActive && <LeaderBoard leaders={leaders} userId={userId} />}
						{!isLeaderboardActive && <Prizes prizes={prizes}  />}
						{!isUserAtTopPostion && <h2>{`Gain ${userNextAvailabelPrize} points and win the next prize!`}</h2>}
					</Tabs.TabsContent>
				</Tabs>
			</div>
		);
	}
}
Tournament.propTypes = {
	fetchLeaders: PropTypes.func.isRequired,
	fetchPrizes: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Tournament);
