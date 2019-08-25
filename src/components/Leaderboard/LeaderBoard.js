
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../sharedComponent/Table';

const LeaderBoard = ({ leaders, userId }) => (
	<Table>

		<Table.Body>
			<Table.Row>
				<Table.Header>Pos</Table.Header>
				<Table.Header>Score</Table.Header>
				<Table.Header>Prize</Table.Header>
			</Table.Row>
			{leaders.map(leader => (
				<Table.Row key={leader.playerId} isActive={leader.playerId === userId}>
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
