import React, { useState, useEffect } from "react";

export default function Task3() {

	let [color, setColor] = useState('#FAEDB3');

	const onchange = (ev) => setColor(ev.target.value);
	return(
		<div className="wrapper3" style={{backgroundColor : color}}>
			<select value={color} onChange={onchange}>
				<option value="#A0CAB5">sea</option>
				<option value="#FAEDB3">sand</option>
				<option value="#ED766C">peach</option>
			</select>
			<h2>{color}</h2>
		</div>
	);
}