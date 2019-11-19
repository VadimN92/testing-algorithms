function InsertionSort(array) {
	const arrayLength = array.length;
	for (let i = 1; i < arrayLength; i++) {
		let temp = array[i];
		let j = i-1;

		while (j >= 0 && array[j] > temp) {
			array[j + 1] = array[j];
			j = j -1;
		}

		array[j + 1] = temp;
	}
}
