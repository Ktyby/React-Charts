const getMeasureArray = (data, measure) => (measure === 'axis' ? data.map(({ x }) => x) : data.map(({ y }) => y));

export default getMeasureArray;
