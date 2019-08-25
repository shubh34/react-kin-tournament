import './TabsContent.scss';
import React from 'react';
import PropTypes from 'prop-types';

const TabsContent = ({ children }) => (
	<div className="c-tab-content">
		{children}
	</div>
);


TabsContent.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TabsContent;
