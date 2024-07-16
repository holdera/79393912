import { configureStore } from '@reduxjs/toolkit';
import callSlice from './call-slice';

const store = configureStore({
	reducer: {
		calls: callSlice.reducer,
	},
});

export default store;
