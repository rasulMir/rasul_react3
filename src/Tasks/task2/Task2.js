import React, {useState, useEffect} from "react";
import Counter from "./Counter";

export default function Task2 () {

	let [pos, setPos] = useState({x : '', y : ''});

	useEffect(() => {
		const mouseMove = (ev) => setPos(pos = { x : ev.x, y : ev.y });
		document.addEventListener('mousemove', mouseMove);
		return () => document.removeEventListener('mousemove', mouseMove);
	}, [pos]);

	return(
		<div>
			<Counter/>
			<h3>xPosition {pos.x}</h3>
			<h3>yPosition {pos.y}</h3>
		</div>
	);
}