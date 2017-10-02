function decimalToBinary(decimalNumber) {
	var stack = [];

	while(true) {
		if(decimalNumber == 1) {
			stack.push(1);
			break;
		}
		var binaryNumber = decimalNumber % 2;
		stack.push(binaryNumber);
		decimalNumber = Math.floor(decimalNumber/2);
	}
	
	function arrayToString(stack) {
		var binaryString = '';
		while(stack.length) {
			binaryString += stack.pop();
		}

		return binaryString;
	}
	return arrayToString(stack);
}

console.log(decimalToBinary(263));
