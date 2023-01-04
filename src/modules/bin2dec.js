export function binaryToDecimal(binary){
	binary = binary.toString();
	let decimal = 0;
	for (let i = 0; i < binary.length; i++) {
		decimal += binary[i]* (2**(binary.length-1-i));
	}
	return decimal;
}

console.log(binaryToDecimal(1111101011));