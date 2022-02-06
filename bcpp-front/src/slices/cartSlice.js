import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		initItems: (state, partTypes) => {
			partTypes.payload.forEach((element) => {
				state.items.push({ partType: element, name: element });
			});
		},

		addItem: (state, item) => {
			console.log(item.payload);
			for (var i in state.items) {
				if (state.items[i].partType == item.payload.partType) {
					state.items[i].name = item.payload.name;
					break;
				}
			}
		},
		deleteItem: (state, item) => {
			state.items.delete(item.payload.id);
		},
		editItem: (state, oldItem, newItem) => {
			state.items.delete(oldItem.payload.id);
			state.items[newItem.payload.id] = newItem.payload.name;
		},
		deleteAll: (state) => {
			state.items = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem, initItems, deleteAll } =
	cartSlice.actions;

export default cartSlice.reducer;
