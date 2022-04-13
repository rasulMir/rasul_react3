import React, { useContext } from "react";
import Context from "./context";

export default function Button() {
	let { isLogged, setIsLogged } = useContext(Context);
	const onclick = () => setIsLogged(isLogged = !isLogged);

	return <button onClick={onclick}>log in me</button>
}