import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/course/filterSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
	}
});
