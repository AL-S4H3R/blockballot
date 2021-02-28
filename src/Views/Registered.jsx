import React from 'react'
import { KycContext } from '../context/KycContext'
import CastVote from './CastVote'
import KYC from './KYC'

const Registered = () => {
    const isKYC = React.useContext(KycContext)
    
    if(isKYC){
        return(<CastVote/>)
    }
    else {
        return(<KYC/>)
    }
}

export default Registered