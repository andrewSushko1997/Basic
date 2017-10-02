function shakerSort(array) {
	var length = array.length,
			left = 0,
			right = length;
	while(left < right) {
		for(var i = left; i < right - 1; i++) {
			if(array[i] >= array[i+1]) {
				swap(array, i, i+1);
			}
		}
		right--;
		for(var j = right; j > left; j--) {
			if(array[j] < array[j-1]) {
				swap(array, j, j-1);
			}
		}
		left++;
	}

	return array;
}

function swap(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

console.log(shakerSort([5,7,4,3,6,1,2,4,5]));