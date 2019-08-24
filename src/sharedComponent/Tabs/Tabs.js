import './Tabs.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ children }) => (
	<nav className="c-tab">
		{children}
	</nav>
);


Tabs.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Tabs;
