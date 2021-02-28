import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { web3 } from '../config/portis'
import MyContract from '../config/Voting'


const Voted = (props) => {
    if(props.voted !== ''){
        return(
            <Fragment>
                <div>
                    <h2>You have successfully voted for {props.voted}</h2>
                    <p>You can now check the election results <a href="/">here</a></p>
                </div>

            </Fragment>
        )
    }
    else {
        return(<></>)
    }
}
const CastVote = () => {

    const options = [
        {
            name: "Candidate 1",
            candidate_id: 1,
            party: "Republican"
        },
        {
            name: "Candidate 2",
            candidate_id: 2,
            party: "Democratic"
        }
    ]

    const [id, setId] = useState(0)
    const [contract, setContract] = useState()
    const [ethAccount, setEthAccount] = useState()
    const [voted, setVoted] = useState('')

    useEffect(() => {
        initWeb3()
    }, [])

    const initWeb3 = async () => {
        const networkId = await new web3.eth.net.getId()
        console.log(`Network id: ${networkId}[1]`)
        const account = (await new web3.eth.getAccounts())[0]
        setEthAccount(account)
        console.log(`Account: ${account}`)
        const contractInstance = await new web3.eth.Contract(
            MyContract.abi,
            MyContract.networks[networkId].address
        )
        setContract(contractInstance)
    }

    // // const authorizeUser = async () => {
    // //     const authorize = await contractInstance.methods.authorizeVoter(account).send({
    // //         from: account
    // //     })
    // //     const voter = await contractInstance.methods.voters(account).call()
    // //     const auth = await voter.authorized
    // //     console.log(auth)
    // // }

    const castVote = async (contract, candidate_id, name) => {
        // const vote = await contract.methods.vote(candidate_id, ethAccount).send({
        //     from: ethAccount
        // })
        const candidate = await contract.methods.candidates(candidate_id).call() 
        console.log("Candidate: ", name)
        setVoted(name)    
    }

    return(
        <Fragment>
            <div className="h-screen w-screen overflow-y-auto bg-gray-100">
                <Navbar/>
                <section className="space-y-4">
                    <h1 className="text-center font-bold text-xl">Your account: </h1>
                    <p className="text-sm text-gray-700 text-center">{ethAccount}</p>
                    <h2 className="text-center font-bold text-xl">Cast your vote</h2>
                    {
                        options.map((candidate) => {
                            return(
                                <div className="space-y-4 flex justify-center bg-gray-900 p-2 rounded-md text-gray-100" key={candidate.candidate_id}>
                                    <button onClick={() => castVote(contract, candidate.candidate_id, candidate.name)}>{candidate.name}</button>
                                </div>
                            )
                        })
                    }
                    <Voted voted={voted}/>
                </section>
            </div>
        </Fragment>
    )
}

export default CastVote