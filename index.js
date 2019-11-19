let instanceChart;
const App = function() {

	if (typeof(Worker)==="undefined") {
		alert("Ops, your browser doesn't support HTML5 Web Worker! Please choose another modern browser and try again.");
	}

	const arrayLength = document.getElementById("arrayLength");

	const testBtn = document.getElementById("test-bubble-sort-btn");
	const spinner = document.querySelector(".lds-spinner");

	testBtn.addEventListener("click", () => {
		spinner.style.display = "block";
		testBtn.disabled = true;
		destroyChart();

		const worker = new Worker("worker.js");
		const arrayLengthInt = parseInt(arrayLength.value);

		worker.onmessage = function(e) {
			const { resultBubbleSort, resultInsertSort, resultQuickSort, resultNativeJSSort } = e.data;
			console.log("resultBubbleSort");
			console.table(resultBubbleSort);

			console.log("resultInsertSort");
			console.table(resultInsertSort);

			console.log("resultQuickSort");
			console.table(resultQuickSort);

			console.log("resultNativeJSSort");
			console.table(resultNativeJSSort);

			renderChart(resultBubbleSort, resultInsertSort, resultQuickSort, resultNativeJSSort);
			worker.terminate();
			testBtn.disabled = false;
			spinner.style.display = "none";
		}
		worker.postMessage(["test", arrayLengthInt]);
	});
};

function renderChart(resultBubbleSort, resultInsertSort, resultQuickSort, resultNativeJSSort) {
	const chart = document.getElementById("chart").getContext("2d");
	instanceChart = new Chart(chart, {
		type: "bar",
		data: {
			labels: ["Random", "Increasing", "Decreasing"],
			datasets: [{
				label: "Bubble Sort",
				data: resultBubbleSort,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 99, 132, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(255, 99, 132, 1)',
				],
				borderWidth: 1
			},
				{
					label: "Insertion Sort",
					data: resultInsertSort,
					backgroundColor: [
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(54, 162, 235, 0.2)',
					],
					borderColor: [
						'rgba(54, 162, 235, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(54, 162, 235, 1)',
					],
				},
				{
					label: "Quick Sort",
					data: resultQuickSort,
					backgroundColor: [
						'rgba(255, 206, 86, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(255, 206, 86, 0.2)',
					],
					borderColor: [
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
					],
				},
				{
					label: "Native JS Sort",
					data: resultNativeJSSort,
					backgroundColor: [
						'rgba(75, 192, 192, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(75, 192, 192, 0.2)',
					],
					borderColor: [
						'rgba(75, 192, 192, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(75, 192, 192, 1)',
					],
				}]
		},
		options: {
			responsive: true,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: false
					}
				}]
			}
		}
	});
}

function destroyChart() {
	instanceChart && instanceChart.destroy();
}

document.addEventListener('DOMContentLoaded', App);
