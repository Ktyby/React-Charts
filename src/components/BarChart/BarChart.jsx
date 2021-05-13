import React, { useRef } from 'react';

import Axes from './Axes';
import Bars from './Bars';

import { getMeasureArray } from './utils';

import './style.css';

const chartsData = [
	{ x: 'Germany', y: 91 },
	{ x: 'USA', y: 80 },
	{ x: 'Russia', y: 51 },
	{ x: 'England', y: 96 },
	{ x: 'Poland', y: 54 },
	{ x: 'Belarus', y: 44 },
	{ x: 'Hungary', y: 84 },
	{ x: 'Cuba', y: 23 },
];

const BarChart = () => {
	const currentElement = useRef(null);

	return (
		<div className="chart__container" ref={currentElement}>
			<Bars bars={getMeasureArray(chartsData, 'bar')} parentElement={currentElement} />
			<Axes intervals={getMeasureArray(chartsData, 'axis')} />
		</div>
	);
};

export default BarChart;
