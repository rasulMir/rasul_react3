import React, { useContext } from "react";
import Context from "./context";
import { DELETE, ADD } from "./boilerPlate";

export default function Button (props) {

	let { dispatch } = useContext(Context);

	const delFeatures = id => {
		dispatch({
			type : DELETE,
			id
		});
	}
	
	const addFeatures = id => {
		dispatch({
			type : ADD,
			id
		});
	}
	
	const result = (props.bool) ?
			(<button onClick={() => delFeatures(props.id)}>Delete</button>) :
			(<button onClick={() => addFeatures(props.id)}>Add</button>);
		
	return (
		<>
			{result}
		</>
	);
}