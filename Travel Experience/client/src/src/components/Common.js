import React from 'react'

export default function Common() {
  return (
    <div style={{
        width:'40%',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
        background:'#add8e6',
        justifyContent:'flex-end'
    }}>
        <p style={{
          color:'black',
          paddingLeft:'5px',
          paddingRight:'5px',
          fontFamily:"inherit",
          fontSize:'20px',
          marginLeft:'10px'
        }}>
        “Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts.” ~ Mark Twain 
        </p>
        <img
            src='https://roadtripshq.com/wp-content/uploads/2017/10/koh-samui-featured.jpg'
            style={{
                height: '430px',
                width: '450px',
                borderRadius: "10px",
                margin:'2px' 
            }}
        />
        
    </div>
  )
}
