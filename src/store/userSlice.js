import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    name: "",
    email: "",
    phonenumber: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        updateUser: (state, action) => {
            return  {...state, ...action.payload}
        }
    }
})

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;