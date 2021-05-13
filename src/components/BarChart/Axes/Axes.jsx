import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Axes = memo(({ intervals }) => (
	<div className="chart__axes">
		{intervals.map((element, index) => (
			<div className="chart__interval" key={index}>
				{element}
			</div>
		))}
	</div>
));

Axes.propTypes = {
	intervals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Axes.defaultProps = {
	intervals: [],
};

export default Axes;
