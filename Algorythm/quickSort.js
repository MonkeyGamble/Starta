let arr = [6, 4, 8, 9, 9, 3, 1, 2, 7, 5];

// let left = [4, 3, 3, 1, 2];
// let right = [6, 8, 9, 7];

function quickSort(arr) {
	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	if (arr.length <= 1) return arr;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(arr);
// let sortedArray = quickSort(arr);
// console.log(sortedArray);

function quickSort1(arr) {
	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}
	return [...left, pivot, ...right];
}

let array = [10, 12, 4, 5, 0, 2, 3, 7, 6, 16, 15, 9];
console.log(array);
console.log(quickSort1(array));
