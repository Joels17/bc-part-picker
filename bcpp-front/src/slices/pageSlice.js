import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
	name: 'page',
	initialState: {
		value: 'mainpage',
	},
	reducers: {
		mainPage: (state) => {
			state.value = 'mainpage';
		},
		partsPage: (state) => {
			state.value = 'partspage';
		},
	},
});

// Action creators are generated for each case reducer function
export const { mainPage, partsPage } = pageSlice.actions;

export default pageSlice.reducer;
