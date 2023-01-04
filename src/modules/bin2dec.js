export function binaryToDecimal(binary){
	if (binary === '') return 'Introduce un valor';
	binary = binary.toString();
	if(!/^[01]+$/.test(binary)) return 'Valor no válido';
	let decimal = 0;
	for (let i = 0; i < binary.length; i++) {
		decimal += binary[i]* (2**(binary.length-1-i));
	}
	return decimal;
}

export function decimalToBinary(decimal){
	if (decimal === '') return 'Introduce un valor';
	if(!/^[0-9]+$/.test(decimal)) return 'Valor no válido';
	return (decimal >>> 0).toString(2);
}