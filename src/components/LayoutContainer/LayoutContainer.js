import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTournamentLeaders, fetchTournamentPrizes } from '../../states/tournament/actions';
import { getLeaders, getPrizes } from '../../states/tournament/selectors';


const mapDispatch = (dispatch) => ({
	fetchLeaders: () => dispatch(fetchTournamentLeaders()),
	fetchPrizes: () => dispatch(fetchTournamentPrizes()),
});
const mapState = state => ({
	prizes: getPrizes(state),
	leaders: getLeaders(state),
});
export class LayoutContainer extends Component {
	componentDidMount() {
		this.props.fetchLeaders();
		this.props.fetchPrizes();
	}
	render() {
	return <div>Layout Container</div>;
	}
};

export default connect(mapState, mapDispatch) (LayoutContainer);
