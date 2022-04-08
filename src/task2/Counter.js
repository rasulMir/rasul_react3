import React, {useState, useEffect} from "react";

export default function Counter () {

	let [count, setCount] = useState(0);

	const onclick = () => {
		setCount(count += 1);
	}

	return(
		<div>
			<h2>you've clicked { count }</h2>
			<button onClick={onclick}>click me</button>
		</div>
	);
}