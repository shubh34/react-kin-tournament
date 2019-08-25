
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../sharedComponent/Table';

const Prizes = ({ prizes }) => (
	<Table>

		<Table.Body>
			<Table.Row>
				<Table.Header>Pos</Table.Header>
				<Table.Header>Prize</Table.Header>
			</Table.Row>
			{prizes.map(prize => (
				<Table.Row key={prize.fromPostion}>
					<Table.Column>
						{prize.range}
					</Table.Column>
					<Table.Column>
						<strong>
							{prize.prize}
						</strong>

					</Table.Column>
				</Table.Row>
			))}
		</Table.Body>
	</Table>
);


Prizes.propTypes = {
	prizes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Prizes;
