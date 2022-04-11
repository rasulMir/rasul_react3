import React , { useContext } from "react";
import ToDoContext from "./ToDoCntx";

export default function Button() {
	let { list, setList, txt } = useContext(ToDoContext);
	
	const onsubmit = (ev) => {
		ev.preventDefault();
		let newList = list;
		newList.push(txt);
		setList(list = newList);
		txt = '';
	};

	return (
		<button className="btn" onClick={onsubmit}>Add</button>
	);
}