import React, { useContext,useEffect,useState } from 'react'
import nothing from './../images/nothing.jpeg'
import DP from './../images/User.jpg'
import { PlaceOutlined, LocationCityRounded, Payment, NearMe, Security, Description } from '@mui/icons-material'

import { UserProvider } from './../../Context'
import {getExperiences} from './../../Service/Api'


// const Experiences = [
//     {
//         "key": 1,
//         "userName": "Asim",
//         "placeName": "sssl",
//         "City": "ism",
//         "suggestion": 'suggestion',
//         "image": pic,
//         "costOfTravel": 22,
//         "nealyPlaces": "skks",
//         "safety": true,
//     },

// ]
export default function Main() {
    
    const { Experiences ,SetExperences} = useContext(UserProvider)
    useEffect(()=>{
        const getExperiencess=async()=>{
            const response= await getExperiences();
            SetExperences(response)
        }
        getExperiencess();
    },[])
    const RenderItem = ({ Experience }) => {


        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                background: "skyblue",
                width: '800px',
                marginTop: '10px',
                borderRadius: '10px',
                borderWidth: '1px',
                borderColor: 'red',
                padding: '10px',


            }}>
                {/*User */}
                <div style={{
                    marginTop: '-1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>
                    <img
                        src={DP}
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%'
                        }}
                    />
                    <p style={{
                        fontSize: '25px',
                        fontWeght: 'bold',
                        marginLeft: '5px',
                    }}>
                        {Experience.userName}
                    </p>
                </div>

                {/* PlaceName */}
                <div style={{
                    display: 'flex',
                    marginTop: '-2.2rem',
                    alignItems: 'center'
                }}>
                    <PlaceOutlined style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [PlaceName]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.placeName}
                    </p>
                </div>

                {/* city */}
                <div style={{
                    display: 'flex',
                    marginTop: '-2.2rem',
                    alignItems: 'center'
                }}>
                    <LocationCityRounded style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [City]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.City}
                    </p>
                </div>

                {/* Nearly places */}
                <div style={{
                    display: 'flex',
                    marginTop: '-2.2rem',
                    alignItems: 'center'
                }}>
                    <NearMe style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [NearlyPlaces]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.nealyPlaces}
                    </p>
                </div>

                {/* Cost */}
                <div style={{
                    display: 'flex',
                    marginTop: '-2.2rem',
                    alignItems: 'center'
                }}>
                    <Payment style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [Cost]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.costOfTravel}
                    </p>
                </div>

                {/* Safety */}
                <div style={{
                    display: 'flex',
                    marginTop: '-2.2rem',
                    alignItems: 'center'
                }}>
                    <Security style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [Safety]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.safety ? "Safe" : "Not Safe"}
                    </p>
                </div>

                {/* Suggestion */}
                <div style={{
                    display: 'flex',
                    marginTop: '-1.8rem',
                    alignItems: 'center'
                }}>
                    <Description style={{ marginTop: '2px' }} />
                    <p style={{
                        fontSize: '15px',
                    }}>
                        [Suggestion]
                    </p>
                    <p style={{
                        fontSize: '20px',
                        marginLeft: '5px',
                    }}>
                        {Experience.suggestion}
                    </p>
                </div>
                {/* Image */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '-0rem',
                    justifyContent: 'center'

                }}>
                    {Experience.image &&
                        <img
                            src={URL.createObjectURL(Experience.image)}
                            alt="aap"
                            style={{
                                height: '350px',
                                width: '550px',
                                borderRadius: '20px'
                            }}
                        />
                    }
                </div>
            </div>
        )
    }
    const EmptyExperience = () => {
        //console.log('here')
        return (
            <div style={{
                background: "skyblue",
                width: '800px',
                marginTop: '10px',
                height: '88vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '10px'

            }}>
                <img
                    src={nothing}
                    style={{
                        height: '80%',
                        width: '80%',
                        zIndex: '25px',
                        borderRadius: '10px'
                    }}
                />
                <p style={{
                    marginTop: '30px',
                    fontSize: '20px',
                    fontFamily: '-moz-initial'
                }}>
                    No Experience Exist
                </p>
            </div>
        )
    }

    return (
        <div style={{
            height: '100%',
            background: "lightblue",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            {
                Experiences.length === 0 ? <EmptyExperience /> : ""
            }
            <div>
                {
                    Experiences.map((Experience) =>
                        <RenderItem Experience={Experience} />
                    )
                }
            </div>
            <div style={{ marginBottom: '20px' }}>

            </div>
        </div>
    )
}
