import React, { useMemo, useState } from "react";
import Title from "./Title";
import ToDoBttm from "./ToDoBttm";
import ToDoContext from "./ToDoCntx";
import Form from "./Form";
import "./useCntx.css";

export default function UseContext2() {

	let [txt, setTxt] = useState('');
	let [list, setList] = useState([]);

	const value = useMemo(() => (
		{
			txt, setTxt,
			list, setList
		} 
	), [txt, list]);

	return (
		<ToDoContext.Provider value={ value }>
			<div className="wrap">
				<Title title='ToDo'/>
				<Form />
				<ToDoBttm/>
			</div>
		</ToDoContext.Provider>
	);
}