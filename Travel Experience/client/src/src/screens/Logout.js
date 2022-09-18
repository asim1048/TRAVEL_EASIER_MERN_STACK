import React, { useEffect, useContext } from 'react'
import { Navigate } from "react-router-dom";

import { UserProvider } from './../../Context'

export default function Logout() {

    const { setIsUserLogiedIn } = useContext(UserProvider)
    useEffect(() => {
        setIsUserLogiedIn(false)
    }, [])
    return (
        <div>
            <Navigate to="/login" replace={true} />
        </div>
    )
}
