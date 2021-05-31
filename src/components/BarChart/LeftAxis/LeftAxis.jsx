import React, { useState } from 'react';

import { useSetLeftAxisValues } from './hooks';

import './style.css';

const LeftAxis = () => {
	const [listItems, setListItems] = useState([]);
	const [negativeListItems, setNegativeListItems] = useState([]);

	useSetLeftAxisValues(setListItems, setNegativeListItems);

	return (
		<div className="chart__left-axis">
			<div className="chart__values">
				{listItems.map((element, index) => (
					<div key={index} className="chart__value">
						{element}
					</div>
				))}
			</div>
			<div className="chart__values chart__values--negative">
				{negativeListItems.map((element, index) => (
					<div key={index} className="chart__value">
						{element}
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftAxis;
