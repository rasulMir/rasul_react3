import React, { useRef, useImperativeHandle, forwardRef } from "react";


function Input(props, ref) {
	const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
		blur: () => {
      inputRef.current.blur();
    }
  }));
	return(
		<div>
			<input type="text" ref={inputRef} placeholder="ss"/>
		</div>
	);
}

export default forwardRef(Input);