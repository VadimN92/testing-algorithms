/*function partition(array, left, right) {
	const pilot = array[right];
	let i = left - 1;

	for (let j = left; j < right; j++) {
		if (array[j] < pilot) {
			i++;

			const temp1 = array[i];
			array[i] = array[j];
			array[j]= temp1;
		}
	}

	const temp2 = array[i+1];
	array[i+1] = array[right];
	array[right] = temp2;

	return i+1;
}*/

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



function quickSort(items, left, right) {

	let index;

	if (items.length > 1) {

		index = partition(items, left, right);

		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}

		if (index < right) {
			quickSort(items, index, right);
		}

	}

	return items;
}
