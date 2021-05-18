import { useEffect } from 'react';

import { setBars, setMinValue } from '../utils';

const useSetBarHeight = (parentElement) => {
	useEffect(() => {
		const bars = document.querySelectorAll('.charts__bar');
		const chartDomain = document.querySelector('.chart__domain');
		const leftAxis = document.querySelector('.chart__left-axis');

		const minValueNumber = setMinValue(bars, parentElement);

		leftAxis.style.height = `${leftAxis.clientHeight + minValueNumber}px`;

		const intervalBetweenBars = parentElement.current.clientWidth / bars.length;

		setBars({ bars, chartDomain, intervalBetweenBars, minValueNumber });
	}, [parentElement]);
};

export default useSetBarHeight;
