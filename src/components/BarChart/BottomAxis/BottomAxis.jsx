import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const BottomAxis = memo(({ domain }) => (
	<div className="chart__axis">
		{domain.map((element, index) => (
			<div className="chart__interval" key={index}>
				{element}
			</div>
		))}
	</div>
));

BottomAxis.propTypes = {
	domain: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BottomAxis.defaultProps = {
	domain: [],
};

export default BottomAxis;
