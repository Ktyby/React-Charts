import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import BottomAxis from './BottomAxis';
import Bars from './Bars';

import './style.css';

const BarChart = ({ chartsData }) => {
	const currentElement = useRef(null);

	return (
		<div className="chart__container" ref={currentElement}>
			<Bars bars={chartsData.map(({ y }) => y)} parentElement={currentElement} />
			<BottomAxis domain={chartsData.map(({ x }) => x)} />
		</div>
	);
};

BarChart.propTypes = {
	chartsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

BarChart.defaultProps = {
	chartsData: [],
};

export default BarChart;
