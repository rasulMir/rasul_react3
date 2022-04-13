import React from "react";

export default function Title(props) {
	let title = props.title;
	return (
		<h2 className="title">{title}</h2>
	);
}