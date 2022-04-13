import React from "react";

export default function PlayersList(props) {


	const items = props.players.map(player => (
		<li className="li" key={player.id}>
			<span className={player.isAlive ? '' : 'dead'} >
				{ player.name }
			</span>
			<button className="btn" onClick={ () => props.onclick(player.id, player.isAlive) }>
				{player.isAlive ? 'Убить' : 'Оживить'}
			</button>
		</li>
	));

	return (
		<ul className="ul">
			{items}
		</ul>
	);
}