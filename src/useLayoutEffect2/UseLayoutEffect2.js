import React, { useLayoutEffect, useRef, useState } from "react";

import './style.css';

export default function UseLayoutEffect2() {

	let [number, setNumber] = useState('0');
	let [rotate, setRotate] = useState('0');
	let inpNum = useRef(null);

	useLayoutEffect(() => {
		inpNum.current.style.transform = `rotateZ(${rotate}deg)`;
	}, [rotate]);


	
	return(
		<>
			<div className='square'  ref={inpNum}></div>
			<input type='number' onChange={(e) => setNumber(e.target.value)} className='inp'/>
			<button onClick={() => setRotate(rotate = number)}>run test</button>
		</>
	);
}