import React, { useRef } from "react";
import Btn1 from "./Btn1";
import Btn2 from "./Btn2";
import Input from "./Input";


export default function UseImperHandle() {
	const inputRef = useRef();
  
	return(
		<div>
			<Input ref={inputRef}/>
			<Btn1 onclick={() => inputRef.current.focus()}/>
			<Btn2 onclick={() => inputRef.current.blur()}/>
		</div>
	);
}