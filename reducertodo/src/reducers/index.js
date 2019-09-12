export const initialState = {
	todos: [
		{
			item: 'Learn About Reducers',
			completed: false,
			id: 3892987589,
		},
	],
};
//Actions Needed
// ADD_TODO
// TOGGLE COMPLETE
// CLEAR COMPLETED
export function todoReducer(state, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todos: [ ...state.todos, { item: action.payload, id: Date.now(), completed: false } ],
			};
		case 'TOGGLE_COMPLETE':
			return {
				...state,
				todos: state.todos.map((todo) => (todo.id == action.id ? { ...todo, completed: !todo.completed } : todo)),
			};
		case 'CLEAR_COMPLETED':
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.completed),
			};
		default:
			return state;
	}
}
