import React, {useState, useEffect} from "react";

export default function Task4 () {
	let date = new Date();
	let [time, setTime] = useState(date.toLocaleTimeString());
	useEffect(() => {
		
		let interval = setInterval(() => {
			timer();
		}, 1000);

		return () => clearInterval(interval);
	}, [time]);

	const timer = () => {
		let date = new Date();
		setTime(date.toLocaleTimeString());
	}

	return(
		<div className="card">
			<h2 className="card__title">The time is</h2>
			<div className="card__time">{time}</div>
		</div>
	);
}