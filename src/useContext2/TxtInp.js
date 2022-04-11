import React , { useContext } from "react";
import ToDoContext from "./ToDoCntx";

export default function TxtInp() {
	let { txt, setTxt } = useContext(ToDoContext);
	const onchange = (e) => setTxt(txt = e.target.value);


	return (
		<input type="text" className="input" onchange={onchange} required/>
	);
}