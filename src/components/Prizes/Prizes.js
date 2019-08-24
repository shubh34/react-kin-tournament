
import React from 'react';
import PropTypes from 'prop-types';

const Prizes = ({ name, onClick, className }) => (
    <div>Prizes</div>
);


Prizes.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Prizes;
