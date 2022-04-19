module.exports = (array, object) => {
	object = object || null;
	let index = Math.floor(Math.random() * array.length);
	if (object !== null) {
		index = Math.floor(Math.random() * array.length.object);
		return array[index].object;
	} else {
		return array[index];
	}
};