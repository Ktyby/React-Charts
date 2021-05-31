import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import LeftAxis from './LeftAxis';
import BottomAxis from './BottomAxis';
import Bars from './Bars';

import './style.css';

const BarChart = ({ chartsData }) => {
	const currentElement = useRef(null);

	return (
		<div className="chart__container" ref={currentElement}>
			<LeftAxis />
			<div className="chart__content">
				<Bars bars={chartsData.map(({ y }) => y)} parentElement={currentElement} />
				<BottomAxis domain={chartsData.map(({ x }) => x)} />
			</div>
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
