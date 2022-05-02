module.exports = (value) => {
	const result = value % 2;
	if (result === 1) {
		return 'odd';
	} else if (result === 0) {
		return 'even';
	} else {
		return 'NaN';
	}
};