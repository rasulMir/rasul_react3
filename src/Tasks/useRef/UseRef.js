import React, { useRef } from "react";


export default function UseRef() {
	const inp = useRef(null);
	return(
		<div>
			<input type="text" ref={inp} placeholder="ss"/>
			<button onClick={() => inp.current.focus()}>Focus</button>
			<button onClick={() => inp.current.blur()}>edit focus</button>
		</div>
	);
}