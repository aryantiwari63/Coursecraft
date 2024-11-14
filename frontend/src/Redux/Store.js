import { configureStore } from '@reduxjs/toolkit'
import coursereducer from './Slices/CourseSlice';

const store = configureStore({
    reducer: {
    courses: coursereducer,
    },

})

export default store;