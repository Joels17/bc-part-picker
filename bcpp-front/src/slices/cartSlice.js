import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {},
	},
	reducers: {
		initItems: (state, partTypes) => {
			state.items[''] = partTypes;
		},

		addItem: (state, item) => {},
		deleteItem: (state, item) => {
			state.items.delete(item.payload.id);
		},
		editItem: (state, oldItem, newItem) => {
			state.items.delete(oldItem.payload.id);
			state.items[newItem.payload.id] = newItem.payload.name;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem, initItems } = cartSlice.actions;

export default cartSlice.reducer;
