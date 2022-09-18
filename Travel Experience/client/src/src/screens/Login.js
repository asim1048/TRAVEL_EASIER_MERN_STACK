import React from 'react'
import Common from '../components/Common'
import Loginn from '../components/Login'
export default function Login() {
    return (
        <div style={{
            margin: '10px', 
            display: "flex", 
            height: "100vh",
        }}>
            <Common />
            <Loginn />
        </div>
    )
}
