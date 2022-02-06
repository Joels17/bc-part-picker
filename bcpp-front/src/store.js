import { configureStore } from '@reduxjs/toolkit';
import pageSlice from './slices/pageSlice';

export default configureStore({
	reducer: {
		page: pageSlice,
	},
});
