import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterProps{
    isMenuOpen:boolean,
    accountType: string | null
}[]

const initialState:CounterProps={
    isMenuOpen: false,
    accountType: null
}

const counterSlice=createSlice({
    name:"counterSlice",
    initialState,
    reducers:{
        toggle_isMenuOpen:(state)=>{
           state.isMenuOpen = !state.isMenuOpen
        },
        set_accountType:(state,action:PayloadAction<string>)=>{
            state.accountType=action.payload;
        }
    }
})

export default counterSlice.reducer;

export const {toggle_isMenuOpen, set_accountType}=counterSlice.actions;







