import React, { useState, useContext } from "react";
import Button from "./Button";
import Context from "./context";
import Txt from "./Txt";

export default function() {

	let [isLogged, setIsLogged] = useState(false);

	const value = {isLogged, setIsLogged}

	return (
		<Context.Provider value={value}>
			<div className="div">
				<Button />
				<Txt name='Vasya'/>
			</div>
		</Context.Provider>
	);
}