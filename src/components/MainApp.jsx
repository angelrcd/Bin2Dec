import React from 'react';
import { useState } from 'react';
import { binaryToDecimal } from '../modules/bin2dec';

function MainApp() {
	const [inputValue, setInputValue] = useState();

	return (
		<div className='w-screen h-screen bg-slate-300 flex flex-col justify-center items-center'>
			<h1>BIN<span className='text-2xl'>2</span>DEC</h1>
			<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='text-center' type="text" />
			<p>{binaryToDecimal(inputValue)}</p>
		</div>
	);
}

export default MainApp;
