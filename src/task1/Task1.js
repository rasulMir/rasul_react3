import React , { useState } from "react";


export default function Task1() {

	const [list, setList] = useState([]);
	let [count, setCount] = useState(0);
	let [itemNum, setItemNum] = useState('');

	const showList = () => {
		return(
			<ul>
				{list.map( (item, i) => {
					return <li key={i} onClick={() => setItemNum(itemNum = `${i}`)}>item {i}</li>
				})}
			</ul>
		);
	}


	const addHandle = () => {
		setCount(count += 1);
		setList([...list, count]);
	}

	return(
		<>
			<h1>Clicked to {itemNum}</h1>
			{showList()}
			<button onClick={addHandle}>add</button>
		</>
	);
}