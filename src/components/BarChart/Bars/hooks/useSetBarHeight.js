import { useEffect } from 'react';

const useSetBarHeight = (parentElement) => {
	useEffect(() => {
		let startPosition = 0;
		const bars = document.querySelectorAll('.charts__bar');
		const chartDomain = document.querySelector('.chart__domain');
		const leftAxis = document.querySelector('.chart__left-axis');

		const intervalBetweenBars = parentElement.current.clientWidth / bars.length;

		bars.forEach((element) => {
			const barValue = element.getAttribute('value');

			element.style.left = `${startPosition}px`;
			element.style.width = `${chartDomain.clientWidth}px`;

			if (barValue < 0) {
				const height = +barValue.split('-').join('');
				element.style.height = `${height}%`;
				element.style.bottom = `${barValue}%`;

				leftAxis.style.height = `${Math.max(
					parentElement.current.clientHeight + element.clientHeight,
					leftAxis.clientHeight
				)}px`;
			} else {
				element.style.height = `${barValue}%`;
			}
			startPosition += intervalBetweenBars;
		});
	}, [parentElement]);
};

export default useSetBarHeight;
