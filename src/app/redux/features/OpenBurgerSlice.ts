import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
        setOpenFrame:(state, action:PayloadAction<boolean>) => {
            state.openFrame = action.payload
        }
    }
})

export const {setOpenFrame} = OpenBurgerSlice.actions
export default OpenBurgerSlice.reducer