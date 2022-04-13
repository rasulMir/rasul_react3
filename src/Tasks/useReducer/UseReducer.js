import React, { useReducer } from "react";
import reducer from "./reducer";

const style = {
	border : "1px solid black",
	padding : '5px'
};

export default function UseReducer() {

	let [state, dispatch] = useReducer(reducer, {
		isDone : false
	});

	const handler = () => {
		dispatch({
			type : 'true',
			payload : true
		});
	};

	let result = state.isDone ? 'x' : '';

	return (
		<ul>
			<li onClick={handler}>
				<span style={style}>{result}</span>				
				  item 1
			</li>
			<li onClick={handler}>
				<span style={style}>{result}</span>				
				  item 2
			</li>
			<li onClick={handler}>
				<span style={style}>{result}</span>				
				  item 3
			</li>
		</ul>
	);
}