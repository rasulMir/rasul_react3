import React, { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffect() {

	let [ number, setNumber ] = useState(0);
	let [ bool, setBool ] = useState(false);
	let h2 = useRef(null);
	const randomNum = () => Math.random() * 10 + 108;
	useLayoutEffect(() => {
		h2.current.textContent = number;
	}, [ number ]);

	useLayoutEffect(() => {
		h2.current.textContent = number;
		let interval = null;
		if (bool) {
			interval = setInterval(() => {
				h2.current.textContent = randomNum();
			}, 250);
		}
		else {
			clearInterval(interval);
			setNumber(+h2.current.textContent);
		}

		return () => clearInterval(interval);
	}, [ bool ]);

	return(
		<>
			<h2 ref={h2}>0</h2>
			<button onClick={() => setNumber(randomNum())}>change number</button>
			<button onClick={() => setBool(bool = !bool)}>run test</button>
		</>
	);
}