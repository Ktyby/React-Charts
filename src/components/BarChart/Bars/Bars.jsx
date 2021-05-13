import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Bars = memo(({ bars }) => {
	return (
		<div className="chart__bars">
			{bars.map((element, index) => (
				<div className="charts__bar" key={index} style={{ height: `${element}%` }}>
					{element}
				</div>
			))}
		</div>
	);
});

Bars.propTypes = {
	bars: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Bars.defaultProps = {
	bars: [],
};

export default Bars;
