import React, { useContext } from "react";
import Context from "./context";
import Button from "./Button";

export default function FeaturesList(props) {

	let { features } = useContext(Context);

	const featuresDisplay = (bool) => {
		let filtered = features.filter(item => (item.isAdded === bool));
		if (!filtered.length) return 'Empty';

		return filtered.map(item => (
			<li key={item.id}>
				{item.feature}
				(+{item.price})
				<Button bool={item.isAdded} id={item.id}/>
			</li>
		));
	}

	return (
		<ul>
			{featuresDisplay(props.bool)}
		</ul>
	);
}