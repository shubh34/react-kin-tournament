import './Table.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children }) => (
	<table className="c-table">
		{children}
	</table>
);


Table.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Table;
