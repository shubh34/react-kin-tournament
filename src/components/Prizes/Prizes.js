
import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../sharedComponent/Table';
import { prizeBoardHeaders } from '../../configs/config';

const Prizes = ({ prizes }) => (
	<Table>

		<Table.Body>
			<Table.Row>
				{prizeBoardHeaders.map(header => <Table.Header key={header}>{header}</Table.Header>)}
			</Table.Row>
			{prizes.map(prize => (
				<Table.Row key={prize.fromPosition}>
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
	prizes: PropTypes.arrayOf(PropTypes.shape({
		prize: PropTypes.string.isRequired,
		range: PropTypes.string.isRequired,
	})),
};

export default Prizes;
