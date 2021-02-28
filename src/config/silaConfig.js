import Sila from 'sila-sdk'

const silaConfig = {
    handle: 'blockballot.shlok.eth',
    key: '1b94c61e5b863baa04329b0cdf397d5059830d715166fb9196766e4a542f9f88'
}

export const initSila = async () => {
    try {
        const res = await Sila.configure(silaConfig)
        console.log(`Sila Initialized`)
    }
    catch(err){
        console.error(err)
    }
}