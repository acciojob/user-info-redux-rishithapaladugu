import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  name:'',
  email:''
}

const UserInfoSlice = createSlice({
  name:'userInfo',
  initialState,
  reducers:{
    setUserName:(state,action)=>{
      state.name = action.payload;
    },
    setUserEmail:(state,action)=>{
      state.email = action.payload;
    }
  }
})


export const {setUserName, setUserEmail} = UserInfoSlice.actions;
export default UserInfoSlice.reducer
