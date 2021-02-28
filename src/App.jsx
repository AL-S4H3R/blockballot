import React, { useEffect, useState } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { initSila } from './config/silaConfig'
import { KycContext, KycProvider } from './context/KycContext'
import Auth from './Views/Auth'
import CastVote from './Views/CastVote'
import KYC from './Views/KYC'
import Main from './Views/Main'

const App = () => {
    
    useEffect(() => {
        //initialize Sila SDK Here
        initSila()
    }, [])

    const [isKyc,setKyc] = useState(true)

    return(
        <React.Fragment>
        <KycProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </BrowserRouter>
        </KycProvider>
        </React.Fragment>
    )
}

export default App