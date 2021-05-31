const setBars = ({ bars, chartDomain, intervalBetweenBars, minValueNumber }) => {
	let startPosition = 0;

	bars.forEach((element) => {
		const barValue = element.getAttribute('value');
		const height = +barValue.split('-').join('');

		element.style.left = `${startPosition}px`;
		element.style.width = `${chartDomain.clientWidth}px`;

		element.style.height = `${height}%`;

		element.style.bottom = +barValue > 0 ? `${minValueNumber}px` : `${minValueNumber - element.clientHeight}px`;

		startPosition += intervalBetweenBars;
	});
};

export default setBars;
