import { createSlice } from "@reduxjs/toolkit";

export interface BurgerProps{
    openFrame:boolean
}

const initialState:BurgerProps = {
    openFrame:true
};

const OpenBurgerSlice = createSlice({
    name:"openFrame",
    initialState,
    reducers:{
        setOpenFrame:(state) => {
            state.openFrame = !state.openFrame
        }
    }
})

export const {setOpenFrame} = OpenBurgerSlice.actions
export default OpenBurgerSlice.reducer