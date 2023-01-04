import React from 'react';
import Switch from '@mui/material/Switch';
import { useState, useRef } from 'react';
import { binaryToDecimal, decimalToBinary } from '../modules/bin2dec';

function MainApp() {
	const [inputValue, setInputValue] = useState('');
	const [switchState, setSwitchState] = useState(true);
	const convertedNumber = useRef('');

	const handleChange = (event) => {
		if (convertedNumber.current.innerHTML !== 'Introduce un valor'){
			setInputValue(convertedNumber.current.innerHTML);
		}
		setSwitchState(event.target.checked);
		console.log(switchState);
	};

	const convertedNum = (inputValue) => {
		// console.log(convertedNumber.current.innerHTML);
		return switchState ? binaryToDecimal(inputValue) : decimalToBinary(inputValue);
	}; 

	return (
		<div className='w-screen h-screen bg-slate-300 flex flex-col justify-center items-center'>
			<h1 className='text-3xl'>BIN<span className='text-5xl text-blue-600'>2</span>DEC</h1>
			<div className='flex items-center'>
				<p>Convertir a Binario</p>
				<Switch
					checked={switchState}
					onChange={handleChange}
					inputProps={{ 'aria-label': 'controlled' }}
				/>
				<p>Convertir a Decimal</p>
			</div>
			<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='text-center' type="text" />
			
			<p ref={convertedNumber}>{convertedNum(inputValue)}</p>
		</div>
	);
}

export default MainApp;
