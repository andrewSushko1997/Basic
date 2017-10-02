function bubbleSort(array) {
	var length = array.length;

	for(var i = 0; i < length; i++) {
		for(var j = 1; j < length - i; j++) {
			if(array[j-1] >= array[j]) {
				var temp = array[j-1];

				/*Swap with temp*/
				array[j-1] = array[j];
				array[j] = temp;

				/*Swap with array*/
				//[array[j-1], array[j]] = [array[j], temp];

				/*Swap with difference*/
				//var difference = temp-array[j];
				//array[j-1] -= difference;
				//array[j] += difference;

			}
		}
	}
	return array;
}

console.log(bubbleSort([5,7,4,3,6,1,2,4]));