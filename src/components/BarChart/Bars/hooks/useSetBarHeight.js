import { useEffect } from 'react';

import { setBars, setMinValue } from '../utils';

const MAGIC_NUMBER = 26;
const MAGIC_INTEND = 4;

const useSetBarHeight = (parentElement) => {
	useEffect(() => {
		const bars = document.querySelectorAll('.chart__bar');
		const zeroAxis = document.querySelector('.chart__zero-axis');
		const chartDomain = document.querySelector('.chart__domain');
		const leftAxis = document.querySelector('.chart__left-axis');
		const chartValues = leftAxis.querySelector('.chart__values');
		const chartNegativeValues = leftAxis.querySelector('.chart__values--negative');

		const minValueNumber = setMinValue(bars, parentElement);

		chartValues.style.height = `${leftAxis.clientHeight - MAGIC_INTEND}px`;
		chartNegativeValues.style.height = `${minValueNumber}px`;
		chartNegativeValues.style.top = `${chartValues.clientHeight - MAGIC_NUMBER}px`;

		zeroAxis.style.marginBottom = `${minValueNumber}px`;
		leftAxis.style.height = `${leftAxis.clientHeight + minValueNumber}px`;

		const intervalBetweenBars = parentElement.current.clientWidth / bars.length;

		setBars({ bars, chartDomain, intervalBetweenBars, minValueNumber });
	}, [parentElement]);
};

export default useSetBarHeight;
