import { configureStore } from "@reduxjs/toolkit";
import studentDetails from './Student.slice'

const store = configureStore({
    reducer:{
     studentDetails:studentDetails
    }
})

export default store