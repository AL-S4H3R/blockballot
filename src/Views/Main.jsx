import React from 'react'
import Auth from './Auth'
import KYC from './KYC'
import Registered from './Registered'

const Main = () => {
    const isAuthorized = false
    if(!isAuthorized){
        return(
            <Registered/>
        )
    }
    else {
        return(
            <Auth/>
        )
    }
}

export default Main