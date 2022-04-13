import React, { useContext } from "react";
import Context from "./context";

export default function Txt(props) {
	const { isLogged } = useContext(Context);

	let txt = isLogged ? 'Anonimous' : `Log in as ${props.name}`;

	return <p>{txt}</p>
}