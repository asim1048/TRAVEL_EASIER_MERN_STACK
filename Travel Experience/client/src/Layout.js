import { Outlet, Link,Navigate } from "react-router-dom";
import { useContext,useState } from "react";

import { UserProvider } from './Context'
const Layout = () => {
  const { isUserLogiedIn,setIsUserLogiedIn } = useContext(UserProvider)
  const [logout,setLogout]=useState(false)

  

  const LoggedIn = () => {
    return (
      <div style={{
        display: 'flex',
        height:'50px',
        fontSize:'30px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        textDecoration:'none'
      }}>
        <Link to="/" style={{ color: 'white',textDecoration:'none' }}>Main</Link>
        <Link to="/addExperience" style={{ color: 'white',textDecoration:'none' }}>AddExperience</Link>
        
        <Link to="/logout" style={{ color: 'white',textDecoration:'none' }}>Logout</Link>

      </div>
    )
  }
  const LoggedInNot = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height:'50px',
        fontSize:'30px',
        
      }}>
        <Link to="/login" style={{ color: 'white' ,textDecoration:'none'}}>Login</Link>
        <Link to="/signUp" style={{ color: 'white',textDecoration:'none' }}>SignUp</Link>
      </div>
    )
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      
    }}>
      
        {isUserLogiedIn == true ? <LoggedIn /> : <LoggedInNot />}

      <Outlet />
    </div>
  )
};

export default Layout;