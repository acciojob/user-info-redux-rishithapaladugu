import React from "react";
import './../styles/App.css';
import {Provider} from 'react-redux'
import Store from './store/Store'
import UserInformation from "./UserInformation";


const App = () => {
  return (
   <Provider store={Store}>
    <UserInformation/>
   </Provider>
  )
}

export default App;
