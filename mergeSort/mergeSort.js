function ArrayMethod (arrayForSort) {
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

var arr = new ArrayMethod([2,5,4,8,2,9,1, 17, 14, 2, 15, 29, 7, 4, 3, 7, 11, 28, 14, 3]);
console.log(arr.mergeSort());