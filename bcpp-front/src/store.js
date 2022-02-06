import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import pageSlice from './slices/pageSlice';

export default configureStore({
	reducer: {
		page: pageSlice,
		cart: cartSlice,
	},
});
