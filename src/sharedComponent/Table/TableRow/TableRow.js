import './TableRow.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableRow = ({ children, isActive = false }) => {
	const className = classNames('c-table-row',
		{
			'c-table-row--active': isActive,
		});
	return (
		<tr className={className}>
			{children}
		</tr>
	);
};


TableRow.propTypes = {
	children: PropTypes.node.isRequired,
	isActive: PropTypes.bool,
};

export default TableRow;
