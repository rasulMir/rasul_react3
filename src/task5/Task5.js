import React, {useState, useMemo} from "react";

export default function Task5() {
	
	let [name, setName] = useState('');
	let [value, setValue] = useState('');

	const onChangeName = (ev) => {
		console.log('name');
		setName(ev.target.value);
	}
	const onChangeValue = (ev) => {
		console.log('value');
		setValue(ev.target.value);
	}

	return(
		<div className="wrapper3">
			<input type="text" value={name} onChange={onChangeName}/>
			<input type="text" value={value} onChange={onChangeValue}/>
			<h2>
				{name}
			</h2>
		</div>
	);
}