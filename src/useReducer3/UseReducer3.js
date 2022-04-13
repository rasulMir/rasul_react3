import React, { useMemo, useReducer } from "react";
import "./style.css";
import Column from "./Column";
import PlayersList from "./PlayersList";
import reducer from "./reducer";
import { switcher, aliveAll } from "./actions.js";

export default function UseReducer3() {
	const playersList = useMemo(() => {
		const id = () => Math.random().toString(36).substr(2,9);

		const playersList = [
			{ id: id(), name: 'red', isAlive : false },
			{ id: id(), name: 'green', isAlive : true },
			{ id: id(), name: 'blue', isAlive : true },
			{ id: id(), name: 'pink', isAlive : true },
			{ id: id(), name: 'grey', isAlive : false },
			{ id: id(), name: 'brown', isAlive : true },
			{ id: id(), name: 'yellow', isAlive : true },
		];
		return playersList;
	}, []);

	let [ players, dispatch ] = useReducer(reducer , playersList);

	const buttonEl = <button 
											className="btn btn_green"
											onClick={() => dispatch(aliveAll())}
											>
												оживить весь экипаж
										</button>;

	const playersListEl = <PlayersList players={players} onclick={ (id, bool) => dispatch(switcher(id, bool)) }/>;

	return (
		<div className="wrap">
			<Column
				title='Ваш Экипаж.'
				children={ playersListEl } 
				/>
			<Column title='Оживить всех.' children={buttonEl}/>
		</div>
	);
}