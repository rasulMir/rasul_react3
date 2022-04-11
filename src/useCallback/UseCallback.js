import React, { useCallback, useEffect, useState } from "react";

export default function UseCallback() {

	let [state1, setState1] = useState(10);
	let [state2, setState2] = useState(20);
	let [state3, setState3] = useState(1000);


	return (
		<>
			<div>
				{state1}
				<button onClick={() => {
					console.log('1');
					setState1(state1 + 1);
				}}>
					10+
				</button>
			</div>
			<div>
				{state2}
				<button onClick={() => {
					console.log('2');
					setState2(state2 - 1);
				}}>
					20+
				</button>
			</div>
			<h2>result {state1 + state2}</h2>
			<div>
				{state3}
				<button onClick={() => {
					console.log('3');
					setState3(state3 + 1);
				}}>
					1000+
				</button>
			</div>
		</>
	)
}