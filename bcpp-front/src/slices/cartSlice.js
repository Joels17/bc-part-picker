import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {},
	},
	reducers: {
		addItem: (state, item) => {
			state.items[item.id] = item.name;
		},
		deleteItem: (state, item) => {
			state.items.delete(item.id);
		},
		editItem: (state, oldItem, newItem) => {
			state.items.delete(oldItem.id);
			state.items[newItem.id] = newItem.name;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
