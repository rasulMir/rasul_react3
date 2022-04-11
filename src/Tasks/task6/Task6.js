import React from "react";

export default function Task6 () {

	let [txt, setTxt] = React.useState('');
	let ref = React.useRef(null);

	const onchange = (ev) => setTxt(txt = ev.target.value);

	const onclickHide = () => ref.current.style.display = 'none';
	
	const onclickShow= () => ref.current.style.display = '';

	return (
		<div>
			<button onClick={onclickShow}>show</button>
			<button onClick={onclickHide}>hide</button>
			<div ref={ref}>
				input field
				<input type="text" onChange={onchange} />
				<h2>{txt}</h2>
			</div>
		</div>
	);
}