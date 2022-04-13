import React from "react";

export default function Column(props) {


	return (
		<div className="column">
			<h2 className="title">{props.title}</h2>
			{props.children}
		</div>
	);
}