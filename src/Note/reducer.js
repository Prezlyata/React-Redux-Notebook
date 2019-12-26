let initialState = {
    number: 0
};

const mainReducer = (state = initialState, action) => {
    console.log(action)
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				number: state.number + action.payload
			};
		case 'DECREMENT':
			return {
				number: state.number - action.payload
			};
		default:
			return state;
	}
};

export default mainReducer;