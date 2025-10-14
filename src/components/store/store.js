import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import userInformation from '../feature/UserInfoSlice'

const Store = configureStore( {
  reducer:{
    userInfo : userInformation
  }
 
})

export default Store
