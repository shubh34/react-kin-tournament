// import './TabsContent.scss';
import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ children }) => (
	<th>
		{children}
	</th>
);


TableHeader.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableHeader;
