import { useEffect } from 'react';

const useSetLeftAxisValues = (setListItems, setNegativeListItems) => {
	useEffect(() => {
		const values = [];
		const negativeValues = [];
		for (let index = 0; index <= 100; index += 10) {
			values.push(index);
		}

		for (let index = 0; index <= 32; index += 10) {
			negativeValues.push(index);
		}

		setNegativeListItems(negativeValues);
		setListItems(values);
	}, []);
};

export default useSetLeftAxisValues;
