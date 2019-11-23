function swap(array, firstIndex, secondIndex){
	const temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function partition(array, left, right) {

	let pivot = array[Math.floor((right + left) / 2)],
		i = left,
		j = right;


	while (i <= j) {

		while (array[i] < pivot) {
			i++;
		}

		while (array[j] > pivot) {
			j--;
		}

		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}

	return i;
}

function QuickSort(array, left, right) {
	if (left < right) {

		left = typeof left != "number" ? 0 : left;
		right = typeof right != "number" ? array.length - 1 : right;

		const pi = partition(array, left, right);

		if (left < pi - 1) {
			QuickSort(array, left, pi - 1);
		}

		if (pi < right) {
			QuickSort(array, pi + 1, right);
		}
	}
}
