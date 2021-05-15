import React from 'react';
import BarChart from '../BarChart';

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

const App = () => (
	<div className="chart">
		<BarChart chartsData={chartsData} />
	</div>
);

export default App;
