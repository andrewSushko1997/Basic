function ArrayMethods (arrayForSort) {
	this.arrayForSort = arrayForSort;
	this.mergeSort = function sortArrays(arraysForSort) {
		if(arraysForSort === undefined) arraysForSort = this.arrayForSort;
		if(arraysForSort.length < 2) {
			return arraysForSort;
		}
		var center = Math.round(arraysForSort.length / 2),
				left = arraysForSort.slice(0, center),
				right = arraysForSort.slice(center);
				

		return merge(sortArrays(left), sortArrays(right));
	}

	this.quickSort = function sortArrays(arraysForSort) {
		if(arraysForSort === undefined) arraysForSort = this.arrayForSort;
		if(arraysForSort.length < 2) return arraysForSort;

		var supportingElement = arraysForSort[0],
				left = [],
				right = [];
		for(var i = 1; i < arraysForSort.length; i++) {
			if(supportingElement >= arraysForSort[i]) {
				left.push(arraysForSort[i]);
			} else {
				right.push(arraysForSort[i]);
			}
		}

		return sortArrays(left).concat(supportingElement, sortArrays(right));

	}
	function merge(left, right) {
		var result = [];

		while(left.length > 0 && right.length > 0) {
			if(left[0] < right[0]) {
				result.push(left.shift());
			}else {
				result.push(right.shift());
			}
		}
		return result.concat(left, right);
	}
}

var arr = new ArrayMethods([2,5,4,8,2,9,1, 17, 14, 2, 15, 29, 7, 4, 3, 7, 11, 28, 14, 3]);
console.log(arr.mergeSort());

console.log(arr.arrayForSort);

console.log(arr.quickSort());

var arr1 = new ArrayMethods([2,5,4,8,2,9,1, 17, 14, 2, 15, 29, 7, 4, 3, 7, 11, 28, 14, 3]);

console.log(arr1.quickSort());