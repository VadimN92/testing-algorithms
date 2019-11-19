function bubbleSort(array) {
	const arrayLength = array.length;
	for(let i = 0; i < arrayLength - 1; i++) {
		for(let j = 0; j < arrayLength - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
}
