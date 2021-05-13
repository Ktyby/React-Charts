import { useEffect } from 'react';

const useSetBarHeight = (parentElement) => {
	useEffect(() => {
		const bars = document.querySelectorAll('.charts__bar');
		const maxHeight = parentElement.current.clientHeight;

		bars.forEach((element) => {
			const barValue = +element.getAttribute('value');
			const barHeight = (maxHeight * barValue) / 100;

			element.style.height = `${barHeight}px`;
		});
	}, [parentElement]);
};

export default useSetBarHeight;
