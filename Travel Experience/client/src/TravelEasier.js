import React,{useContext} from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import {UserProvider} from './Context'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import AddExperience from './src/screens/AddExperience'
import Main from './src/screens/Main'
import Layout from './Layout'
import FirstPage from './src/screens/FirstPage';
import Logout from './src/screens/Logout';
export default function TravelEasier() {
  const {isUserLogiedIn}=useContext(UserProvider)
  return (
    <div style={{
      background:'blue',
      display:'flex',
      flexDirection:'column'
    }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ isUserLogiedIn===true?<Main />:<FirstPage/>} />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="addExperience" element={<AddExperience />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
