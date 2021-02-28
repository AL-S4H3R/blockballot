import Portis from '@portis/web3'
import Web3 from 'web3'

const portis = new Portis('7fcd695f-c95d-4c78-815d-20dce2c7d5c0', 'maticMumbai')
export const web3 = new Web3(portis.provider)