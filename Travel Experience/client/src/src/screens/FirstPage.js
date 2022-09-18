import React from 'react'

export default function FirstPage() {
  return (
    <div style={{
        margin: '10px', 
        display: "flex", 
        height: "89.4vh",
        background:'green',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"column",
        }}>
            <p style={{
                color:'white',
                fontSize:'45px',
            }}>
                Travel Easier
            </p>
            <p style={{
                color:'white',
                fontSize:'25px',
                marginTop:'-1.2rem'
            }}>
                This application will allow people to share their <br></br>travel experience to a community of other <br></br>travellers using this application.
            </p>
            <p style={{
                color:'white',
                fontSize:'25px',
                marginTop:'-1.2rem'
            }}>
                This app will allow people to:-
            </p>
            <ul style={{
                color:'white',
                fontSize:'25px',
                marginTop:'-1.2rem',

            }}>
                <li>
                    Browse travel experience of other people
                </li>
                <li>
                    Add their own experience
                </li>
                <li>
                     can add multiple factors about an experience
                </li>
            </ul>
    </div>
  )
}
