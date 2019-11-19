importScripts("algorithms/bubble-sort.js", "algorithms/insertion-sort.js", "algorithms/quick-sort.js");

function testBubbleSort(random, increasing, decreasing) {
	const result = [];
	let startTime, endTime;

	startTime = performance.now();
	bubbleSort(random);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	bubbleSort(increasing);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	bubbleSort(decreasing);
	endTime = performance.now();
	result.push(endTime - startTime);

	return result;
}

function testInsertSort(random, increasing, decreasing) {
	const result = [];
	let startTime, endTime;

	startTime = performance.now();
	InsertionSort(random);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	InsertionSort(increasing);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	InsertionSort(decreasing);
	endTime = performance.now();
	result.push(endTime - startTime);

	return result;
}

function testQuickSort(random, increasing, decreasing) {
	const result = [];
	let startTime, endTime;

	startTime = performance.now();
	QuickSort(random, 0, random.length - 1);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	QuickSort(increasing, 0, increasing.length - 1);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	QuickSort(decreasing, 0, decreasing.length - 1);
	endTime = performance.now();
	result.push(endTime - startTime);

	return result;
}

function testNativeJSSort(random, increasing, decreasing) {
	const result = [];
	let startTime, endTime;

	startTime = performance.now();
	const r = random.sort((a, b) => a - b);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	const i = increasing.sort((a, b) => a - b);
	endTime = performance.now();
	result.push(endTime - startTime);

	startTime = performance.now();
	const d = decreasing.sort((a, b) => a - b);
	endTime = performance.now();
	result.push(endTime - startTime);

	return result;
}


self.addEventListener("message", function(e) {
	if ( e.data[0] === "test" ) {
		const arrayLength = e.data[1];
		const randomArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * arrayLength));
		const increasingArray = Array.from({length: arrayLength}, (n, i) => ++i);
		const decreasingArray = Array.from({length: arrayLength}, (n, i) => ++i).reverse();

		const resultBubbleSort = testBubbleSort([...randomArray], [...increasingArray], [...decreasingArray]);
		const resultInsertSort = testInsertSort([...randomArray], [...increasingArray], [...decreasingArray]);
		const resultQuickSort = testQuickSort([...randomArray], [...increasingArray], [...decreasingArray]);
		const resultNativeJSSort = testNativeJSSort([...randomArray], [...increasingArray], [...decreasingArray]);

		self.postMessage({
			resultBubbleSort,
			resultInsertSort,
			resultQuickSort,
			resultNativeJSSort
		});
	}
})
