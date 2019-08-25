import './Button.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, className }) => (
	<button type="button" className={`c-button ${className}`} onClick={onClick}>
		{name}
	</button>
);


Button.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;
