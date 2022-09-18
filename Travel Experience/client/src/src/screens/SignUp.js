import React from 'react'
import Common from '../components/Common'
import SignUpp from '../components/SignUp'
export default function SignUp() {
    return (
        <div style={{
            margin: '10px', 
            display: "flex", 
            height: "100vh",
        }}>
            <Common />
            <SignUpp />
        </div>
    )
}
