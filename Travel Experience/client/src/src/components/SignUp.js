import React, {useState} from 'react'
import {addUser} from './../../Service/Api'
import { Navigate } from "react-router-dom";


export default function SignUp() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [name,setname]=useState()
    const [ok,setOk]=useState(false)

    const user={
        "userName":name,
        "email":email,
        "password":password,
    }

    const handleLogin=async()=>{
        //console.log(user)
        await addUser(user);
        setOk(true)
    }
    return (
        <div style={{ width: '70%', 
          background:'#070058 ',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
        }}>
            <p style={{
                fontSize:'45px', 
                color:"white", 
                fontFamily:'Times New Roman',
                fontWeight:'550px',
            }}>
                    Travel Easier
            </p>  

            <input
             style={{
                height:'25px',
                width:"250px",
                borderRadius:'10px',
                borderColor:'green',
                borderWidth:'2px',
                padding:'5px',
                borderStyle:'dotted',
                fontSize:'15px'
            }}
            placeholder="Enter Username"
            onChange={(e)=>setname(e.target.value)} 
            type="text"
            />   
            <input
             style={{
                height:'25px',
                width:"250px",
                borderRadius:'10px',
                borderColor:'green',
                borderWidth:'2px',
                padding:'5px',
                borderStyle:'dotted',
                fontSize:'15px',
                marginTop:'10px'
            }}
            placeholder="Enter Email"
            onChange={(e)=>setEmail(e.target.value)} 
            type="email"
            />

            <input
             style={{
                height:'25px',
                width:"250px",
                borderWidth:'2px',
                borderStyle:'dotted',
                borderRadius:'10px',
                borderColor:'green',
                padding:'5px',
                fontSize:'15px',
                marginTop:'10px'
            }}
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)} 
            type="password"
            />

            <button
            style={{
                height:'55px',
                width:'240px',
                borderRadius:"45px",
                background:"blue",
                marginTop:"10px",
                fontSize:'30px',
                borderColor:'white',
                borderStyle:'dotted',
                borderWidth:'2px',
                color:'white'
            }}
            onClick={()=>{handleLogin()}}
            >Register</button>

            <button
            style={{
                height:'55px',
                width:'340px',
                borderRadius:"45px",
                background:"blue",
                marginTop:"10px",
                fontSize:'20px',
                borderColor:'white',
                borderStyle:'dotted',
                borderWidth:'2px',
                color:'white'
            }}
            onClick={()=>setOk(true)}
            >Already have an account? Login</button>

           {ok &&  <Navigate to="/login" replace={true} />}
        </div>
    )
}
