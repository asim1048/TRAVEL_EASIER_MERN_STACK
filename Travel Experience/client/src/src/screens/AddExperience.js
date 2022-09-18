import React, { useState, useContext } from 'react'
import { Switch, } from '@mui/material'
import { Navigate } from "react-router-dom";
import pic from './../images/download.jpg'

import { UserProvider } from './../../Context'

import {addExperience} from './../../Service/Api'

export default function AddExperience() {

    const { Experiences, SetExperences,user } = useContext(UserProvider);
    const [name, setName] = useState();//placeName
    const [city, setCity] = useState();
    const [image, setImage] = useState();
    const [costOfTravel, setCostOfTravel] = useState();
    const [nealyPlaces, setNearlyPlaces] = useState();
    const [suggestion, setSuggestion] = useState();

    const [safety, setSafety] = useState(false);

    const [ok, setOk] = useState(false)





    const addingExperience =async () => {
        //console.log(user)
        const Experience =
        {
            "key": 1,
            "userName": user.userName,
            "email":user.email,
            "placeName": name,
            "City": city,
            "suggestion": suggestion,
            "image": image,
            "costOfTravel": costOfTravel,
            "nealyPlaces": nealyPlaces,
            "safety": safety,
        }
        console.log("adding")
      await addExperience(Experience)
        var temp = Experiences
        temp.push(Experience)
        SetExperences(temp)
        //console.log(Experience)
    }
    return (
        <div style={{
            height: '100vh',
            background: '#070058 ',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <p style={{
                fontSize: '45px',
                color: "white",
                fontFamily: 'Times New Roman',
                fontWeight: '550px',
            }}>
                Adding new Experience
            </p>
            <input
                style={{
                    height: '25px',
                    width: "300px",
                    borderRadius: '10px',
                    borderColor: 'green',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px'
                }}
                placeholder="Enter Tourest place Name"
                onChange={(e) => setName(e.target.value)}
                type="text"
            />
            <input
                style={{
                    height: '25px',
                    width: "300px",
                    marginTop: '10px',
                    borderRadius: '10px',
                    borderColor: 'green',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px'
                }}
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
                type="text"
            />
            <input
                style={{
                    height: '25px',
                    width: "300px",
                    marginTop: '10px',
                    borderRadius: '10px',
                    borderColor: 'green',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px'
                }}
                placeholder="Enter Suggestion"
                onChange={(e) => setSuggestion(e.target.value)}
                type="text"
            />

            <input
                style={{
                    height: '25px',
                    width: "300px",
                    marginTop: '10px',
                    borderRadius: '10px',
                    borderColor: 'white',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px',
                    color: 'white'
                }}
                placeholder="Select Image"

                type="file"
                name="myImage"
                onChange={(event) => {
                    //console.log(event.target.files[0]);
                    setImage(event.target.files[0]);
                }}
            />

            <input
                style={{
                    height: '25px',
                    width: "300px",
                    borderRadius: '10px',
                    borderColor: 'green',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px',
                    marginTop: "10px",
                }}
                placeholder="Enter Cost of Travel"
                onChange={(e) => setCostOfTravel(e.target.value)}
                type="text"
            />

            <input
                style={{
                    height: '25px',
                    width: "300px",
                    borderRadius: '10px',
                    borderColor: 'green',
                    borderWidth: '2px',
                    padding: '5px',
                    borderStyle: 'dotted',
                    fontSize: '15px',
                    marginTop: "10px",
                }}
                placeholder="Enter Nearly Places"
                onChange={(e) => setNearlyPlaces(e.target.value)}
                type="text"
            />

            {/* Security */}
            <div style={{
                display: 'flex',
                width: '300px',
                justifyContent: "space-between",
                margin: "-1rem",
            }}>
                <p style={{
                    fontSize: '25px',
                    color: 'white',

                }}>
                    Security
                </p>
                <div style={{ marginTop: '25px' }}>
                    <Switch
                        onChange={() => setSafety(!safety)}
                    />
                </div>
            </div>

            {/*Button */}
            <button
                style={{
                    height: '55px',
                    width: '250px',
                    borderRadius: "45px",
                    background: "blue",
                    marginTop: "10px",
                    fontSize: '30px',
                    borderColor: 'white',
                    borderStyle: 'dotted',
                    borderWidth: '2px',
                    color: 'white',
                    marginTop: '15px'
                }}
                onClick={() => { addingExperience(); setOk(true) }}
            >Add</button>

            {ok && <Navigate to="/" replace={true} />}
        </div>
    )
}