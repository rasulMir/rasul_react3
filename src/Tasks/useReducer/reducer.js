
export default function reducer(state, action) {
	switch (action.type) {
		case 'true':
			return {
				isDone : !state.isDone
			};
			break;
	
		default:
			return {
				isDone : !state.isDone
			};
			break;
	}
}