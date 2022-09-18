import React, { useState, createContext, } from 'react';
import pic from './src/images/download.jpg'
export const UserProvider = createContext(null);
 
const Context = ({children}) => {
    const [user,setUser]=useState()
    const [isUserLogiedIn, setIsUserLogiedIn] = useState(false)
    const [Experiences, SetExperences] = useState([])

    return (
        <UserProvider.Provider value={{
            user,
            setUser,
            isUserLogiedIn,
            setIsUserLogiedIn,
            Experiences,
            SetExperences
            
        }}>
            {children}
        </UserProvider.Provider>
    )
}
export default Context;
