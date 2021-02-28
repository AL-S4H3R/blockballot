import React, { useState } from 'react'

export const KycContext = React.createContext();
export const UpdateKycContext = React.createContext()

export const KycProvider = ({children}) => {
    const [isKyc, setKyc] = useState(false)

    const setIsKyc = () => {
        setKyc(true)
    }

    return(
        <KycContext.Provider value={isKyc}>
            <UpdateKycContext.Provider value={setIsKyc}>
                {children}
            </UpdateKycContext.Provider>
        </KycContext.Provider>
    )
}

