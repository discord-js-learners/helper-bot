module.exports = (value) => {
	if (value % 2 !== 0) {
		if (value % 3) {
			if (value % 5 !== 0) {
				if (value % 7 !== 0) {
					return 'prime';
				}
				return 'divisible by 7';
			}
			return 'divisible by 5';
		}
		return 'divisible by 3';
	}
	return 'divisible by 2';
};