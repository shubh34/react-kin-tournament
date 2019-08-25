import './TabsLink.scss';
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const TabsLink = ({ name, onClick, isActive = false }) => {
	const className = classnames('c-tab-button',
		{
			'c-tab-button--active': isActive,
		});
	return (
		<Button type="button" id={name} name={name} className={className} onClick={onClick} />
	);
};


TabsLink.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isActive: PropTypes.bool,
};

export default TabsLink;
