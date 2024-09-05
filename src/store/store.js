import {configureStore} from "@reduxjs/toolkit";
import formReducer from "./userSlice";

const store = configureStore({
    reducer: {
        formReducer
    }
})

export default store;