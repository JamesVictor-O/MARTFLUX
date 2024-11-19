import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps{
    isMenuOpen:boolean,
    accountType:string | null,
}
const initialState:initialStateProps={
    isMenuOpen:false,
    accountType:null,
}

export const RegistrationSlice=createSlice({
    name:'Registration',
    initialState,
    reducers:{
        toggle_menu(state){
            state.isMenuOpen= !state.isMenuOpen;
        },
        setAccountType(state,action){
            state.accountType = action.payload;
        }
    }
 
})

export const {toggle_menu,setAccountType} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;