import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType{
    openAuthorizationModalVisibility:boolean;
}
const initialState:InitialStateType={
    openAuthorizationModalVisibility:false
}
const modalSlice=createSlice({
    name:"modal",
    initialState,
    reducers:{
        setOpenAuthorizationModalVisibility:(state)=>{
            state.openAuthorizationModalVisibility=!state.openAuthorizationModalVisibility
        }
    }
})
export const {setOpenAuthorizationModalVisibility}=modalSlice.actions;
export default modalSlice.reducer;