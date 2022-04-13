import React, { useMemo, useReducer } from "react";
import './style.css';
import reducer2 from "./reducer";
import Context from "./context";
import FeaturesList from "./Features";

export default function UseReducer2() {

	const featuresList = [
		{ feature : 'v-6 motor', price : 1500, isAdded : false, id : Math.random().toString(36).substr(2,11)},
		{ feature : 'sport type', price : 500, isAdded : false, id : Math.random().toString(36).substr(2,11)},
		{ feature : 'premium', price : 5000, isAdded : false, id : Math.random().toString(36).substr(2,11)},
		{ feature : 'spoiler', price : 1900, isAdded : false, id : Math.random().toString(36).substr(2,11)},
	];

	let [features, dispatch] = useReducer(reducer2, featuresList);

	let value = {features, dispatch};

	const total = useMemo( () => {
		const MUSTANG_PRICE = 26000;
		let addedFeaturesTotal =  features.reduce((acc, i) => {
			if (i.isAdded) {
				return acc + i.price;
			}
			return acc;
		}, 0)

		return MUSTANG_PRICE + addedFeaturesTotal;
	}, [features]);

	return (
		<Context.Provider value={value}>
			<div className="wrap">
				<div className="column">
					<img src="https://s.fishki.net/upload/users/2016/11/01/1040276/29d58ba15f79168b23fe9669e37a1608.jpg" alt="" />
					<h2 className="name">2019 ford mustang</h2>
					<h2 className="price">price 26000$</h2>
					<div className="txt">added</div>

					<FeaturesList bool={true}/>
				</div>

				<div className="column">
					<h2 className="name">additional features</h2>
					<FeaturesList bool={false}/>
					<h2 className="price">total amount: {total}$</h2>
				</div>
			</div>
		</Context.Provider>
		
	);
}