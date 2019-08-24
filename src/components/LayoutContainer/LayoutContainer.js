import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchTournamentLeaders, fetchTournamentPrizes } from '../../states/tournament/actions';
import { getPrizes, getTopLeaders, isUserAtTopPostion, getUserNextAvailabelPrize } from '../../states/tournament/selectors';
import { API_CACHE_TIMER } from '../../configs/config';


const mapDispatch = dispatch => ({
	fetchLeaders: () => dispatch(fetchTournamentLeaders()),
	fetchPrizes: () => dispatch(fetchTournamentPrizes()),
});
const mapState = state => ({
	prizes: getPrizes(state),
	leaders: getTopLeaders(state),
	isUserAtTopPostion: isUserAtTopPostion(state),
	getUserNextAvailabelPrize: getUserNextAvailabelPrize(state),
});
export class LayoutContainer extends Component {
	constructor(props) {
		super(props);
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
		console.log(this.props);
		return <div>Layout Container</div>;
	}
}
LayoutContainer.propTypes = {
	fetchLeaders: PropTypes.func.isRequired,
	fetchPrizes: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(LayoutContainer);
