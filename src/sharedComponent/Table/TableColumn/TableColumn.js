
import './TableColumn.scss';
import React from 'react';
import PropTypes from 'prop-types';

const TableColumn = ({ children }) => (
	<td>
		<span className="c-table-column">{children}</span>
	</td>
);


TableColumn.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableColumn;
