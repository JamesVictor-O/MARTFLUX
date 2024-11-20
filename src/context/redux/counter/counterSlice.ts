import { createSlice } from "@reduxjs/toolkit"

interface CounterProps{
    isMenuOpen:boolean,
    accountType: string | null
}

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
        }
    }
})

export default counterSlice.reducer;

export const {toggle_isMenuOpen}=counterSlice.actions;







