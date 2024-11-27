import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface userProps{
    currentUser:User|null
}

const initialState:userProps={
    currentUser:null
}

const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
      set_user:(state, action:PayloadAction<User|null>)=>{
           state.currentUser = action.payload
      }
    }
})

export default userSlice.reducer

export const {set_user}=userSlice.actions