import React from 'react';
import BarChart from '../BarChart';

import './style.css';

const chartsData = [
	{ x: 'Germany', y: 32 },
	{ x: 'USA', y: 100 },
	{ x: 'Russia', y: 21 },
	{ x: 'England', y: 16 },
	{ x: 'Poland', y: 42 },
	{ x: 'Belarus', y: 15 },
	{ x: 'Hungary', y: -32 },
	{ x: 'Cuba', y: 23 },
];

const App = () => (
	<div className="chart">
		<BarChart chartsData={chartsData} />
	</div>
);

export default App;
