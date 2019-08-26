
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../sharedComponent/Table';
import { leaderBoardHeaders } from '../../configs/config';

const LeaderBoard = ({ leaders, userId }) => (
	<Table>
		<Table.Body>
			<Table.Row>
				{leaderBoardHeaders.map(header => <Table.Header key={header}>{header}</Table.Header>)}
			</Table.Row>
			{leaders.map(leader => (
				<Table.Row key={leader.position} isActive={leader.playerId === userId}>
					<Table.Column>
						{`${leader.position}.`}
					</Table.Column>
					<Table.Column>
						{leader.score}
					</Table.Column>
					<Table.Column>
						<strong>
							{leader.prize}
						</strong>
					</Table.Column>
				</Table.Row>
			))}
		</Table.Body>
	</Table>
);


LeaderBoard.propTypes = {
	leaders: PropTypes.arrayOf(PropTypes.object).isRequired,
	userId: PropTypes.number.isRequired,
};

export default LeaderBoard;
