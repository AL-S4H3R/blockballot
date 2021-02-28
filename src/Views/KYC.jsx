import React, { Fragment, useContext, useState } from 'react'
import Sila from 'sila-sdk'
import Navbar from '../components/Navbar'
import {v4} from 'uuid'
import { KycContext, UpdateKycContext } from '../context/KycContext'

const LandingPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [ssn, setSsn] = useState('')
    const [dob, setDob] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [key, setKey] = useState('')

    const [isKycVerified,setIsKycVerified] = useState(false)

    const setKyc = useContext(UpdateKycContext)
    const generateWallet = async () => {
        try {
            const wallet = await Sila.generateWallet()
            console.log(wallet.address)
        }
        catch(err){
            console.error(err)
        }
    }

    const checkHandle = async (handle) => {
        try {
            const res = await Sila.checkHandle(handle)
            console.log(res.data.message)
        }
        catch(err){
            console.error(err)
        }
    }

    const requestKyc = async (handle) => {
        const kyc_response = await Sila.requestKYC(handle, key)
        console.log(kyc_response.data.message)
        if(isKycVerified === false){
            console.log(``)
            setInterval(() => checkKyc(handle), 20000)
        }
    }

    const checkKyc = async (handle) => {
        console.log(`Initiating CheckYC`)
        const res = await Sila.checkKYC(handle, key)
        const message = res.data.message
        if(message === `${handle} has passed ID verification!`){
            setKyc(true)
        }
    }
    const registerUser = async () => {
        //generate wallet
        //check handle
        //registration
        const wallet = await Sila.generateWallet()
        const wallet_address = wallet.address
        console.log(wallet_address)
        setWalletAddress(wallet_address)
        setKey(wallet.privateKey)
        const user = new Sila.User();
        user.handle = `quasarQC273`
        // console.log(user.handle)
        // user.firstName = firstName
        // user.lastName = lastName
        // user.address = address
        // user.city = city
        // user.state = state
        // user.zip = zip
        // user.phone = phone
        // user.email = email
        // user.dateOfBirth = dob
        // user.ssn = ssn
        user.cryptoAddress = wallet_address
        user.firstName = 'First';
        user.lastName = 'Last';
        user.address = '123 Main St';
        user.city = 'Anytown';
        user.state = 'NY';
        user.zip = '12345';
        user.phone = '1234567890';
        user.email = 'test_1@silamoney.com';
        user.dateOfBirth = '1990-01-01';
        user.ssn = '123456222';


        const res = await Sila.register(user)
        console.log(res.data.message)
    }

    return(
        <Fragment>
            <div className="bg-gray-100 h-screen w-screen overflow-y-auto">
                <Navbar/>
                <section className="px-8 py-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-semibold tracking-tighter text-center">Decentralized Voting.</h2>
                        <p className="text-center">
                            Get your id verified through a Social Security Number.
                        </p>
                        <p className="text-center text-sm font-medium text-gray-800">
                            Once the KYC is completed(~ 2 minutes.), you'll be able to access the ballot & cast your vote digitally.
                        </p>
                    </div>
                </section>
                <section className="px-8 py-4">
                    <div className="space-y-4">
                        <h2 className="text-center text-3xl font-medium text-gray-800">Get your Voter Id.</h2>
                        <div className="space-y-1">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="First Name"/>
                            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Last Name"/>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Phone No."/>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Street Address"/>
                            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Zip Code"/>
                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="State"/>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="City"/>
                            <input type="text" value={ssn} onChange={(e) => setSsn(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Social Security Number"/>
                            <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Date of Birth"/>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md border-blue-200" placeholder="Email"/>
                            <button onClick={() => registerUser()} className="flex justify-center w-full bg-gray-900 text-gray-100 p-2 rounded-md">Register User</button>
                            <button onClick={() => requestKyc('quasarQC273')} className="flex justify-center w-full bg-gray-900 text-gray-100 p-2 rounded-md">Request KYC</button>
                            <button onClick={() => checkKyc()} className="flex justify-center w-full bg-gray-900 text-gray-100 p-2 rounded-md">Check KYC</button>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default LandingPage