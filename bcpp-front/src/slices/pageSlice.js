import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
	name: 'page',
	initialState: {
		value: 'mainpage',
		partType: 'null',
	},
	reducers: {
		mainPage: (state) => {
			state.value = 'mainpage';
		},
		partsPage: (state) => {
			state.value = 'partspage';
		},
		setPartType: (state, partType) => {
			state.partType = partType;
		},
	},
});

// Action creators are generated for each case reducer function
export const { mainPage, partsPage, setPartType } = pageSlice.actions;

export default pageSlice.reducer;
