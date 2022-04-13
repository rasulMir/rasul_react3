import { ALIVE_ALL, SWITCHER } from "./boilerTemplate";

const reducer = (state, action) => {
	switch (action.type) {
		case SWITCHER:{
			let newState = state.map(item => {
				if (item.id === action.id) {
					item.isAlive = !action.isAlive;
				}
				return item;
			});
			return [...newState];
			break;
		}
		case ALIVE_ALL: {
			let newState = state.map(item => {
				item.isAlive = true;
				return item;
			});
			return [...newState];
			break;
		}
		default:
			return state;
			break;
	}
};

export default reducer;