import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const BottomAxis = memo(({ domain }) => (
	<div className="chart__bottom-axis">
		{domain.map((element, index) => (
			<div className="chart__domain" key={index}>
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
