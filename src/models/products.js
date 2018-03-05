import dva from 'dva';

export default {
	namespace: 'products',
	state: [],
	reducers: {
		'delete'(state, { payload: id }) {
			console.log(id);
			// return state.filter(item => item.id !== id);
			return state.filter(item => {
				// console.log(item);
				// console.log(id)
				return item.id !== id;
			})
		},
	},
};