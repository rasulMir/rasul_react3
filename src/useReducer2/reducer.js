import { DELETE, ADD } from "./boilerPlate";

export default function reducer2(state, action) {
	switch (action.type) {
		case DELETE: {
			let newState = state.map(item => {
				if (item.id === action.id) {
					item.isAdded = false;
				}
				return item;
			});
			return [...newState];
			break;
		}

		case ADD: {
			let newState = state.map(item => {
				if (item.id === action.id) {
					item.isAdded = true;
				}
				return item;
			});
			return [...newState];
			break;
		}
		default: {
			return state;
		}
	}
}