import React, { useContext, useMemo } from "react";
import Title from "./Title";
import ToDoContext from "./ToDoCntx";

export default function List() {

	const { list } = useContext(ToDoContext);
	const JSONedList = JSON.stringify(list);
	const newList = JSON.parse(JSONedList);
	let result = useMemo(() => {
		let elem;
		if(!list.length) {
			elem = <Title title='Empty'/>;
		}
		else {
			elem = newList.map( (item, i) => <li key={i} className="li">{item}</li>);
		}
		return elem;
	}, list);

	return (
		<ul className="ul">
			{result}
		</ul>
	);
}