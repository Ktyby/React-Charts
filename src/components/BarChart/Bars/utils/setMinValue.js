const setMinValue = (bars, parentElement) => {
	let minValue = 0;

	bars.forEach((bar) => {
		const barValue = bar.getAttribute('value');

		minValue = Math.min(minValue, +barValue);
	});

	return (+`${String(minValue).split('-').join('')}` * parentElement.current.clientHeight) / 100;
};

export default setMinValue;
