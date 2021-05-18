import React, { memo } from 'react';
import PropTypes from 'prop-types';

import useSetBarHeight from './hooks/useSetBarHeight';

import './style.css';

const Bars = memo(({ bars, parentElement }) => {
	useSetBarHeight(parentElement);

	return (
		<div className="chart__bars">
			{bars.map((element, index) => (
				<div className="charts__bar" key={index} value={element}>
					{element}
				</div>
			))}
		</div>
	);
});

Bars.propTypes = {
	bars: PropTypes.arrayOf(PropTypes.number).isRequired,
	parentElement: PropTypes.object,
};

Bars.defaultProps = {
	bars: [],
	parentElement: {},
};

export default Bars;
