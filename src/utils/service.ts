import { ethers } from 'ethers'

import {
  CLET_CONTRACT_0,
  CLET_CONTRACT_1,
  ETH_RPC,
  SKALE_RPC,
  ABI_0,
  ABI_1,
} from './constants'

const ethProvider = new ethers.JsonRpcProvider(ETH_RPC)
const cletPayContract = new ethers.Contract(CLET_CONTRACT_0, ABI_0, ethProvider)

const skaleProvider = new ethers.JsonRpcProvider(SKALE_RPC)
const cletCoreContract = new ethers.Contract(
  CLET_CONTRACT_1,
  ABI_1,
  skaleProvider,
)

export async function resolve(cletName: string) {
  try {
    const resp = await cletCoreContract.resolve(cletName)
    if (resp[0][0] == '') {
      throw new Error('Invalid input')
    }
    return resp
  } catch (ex) {
    throw ex
  }
}

export async function reverse(address: string) {
  try {
    const cletName = await cletCoreContract.reverseLookup(address)
    if (cletName == '') {
      throw new Error('No matching results found')
    }
    return cletName
  } catch (ex) {
    throw ex
  }
}

export async function nameExists(cletName: string) {
  let exists
  try {
    exists = await cletPayContract.nameExists(cletName)
    if (exists == true) {
      const isExpired = await cletPayContract.isExpired(cletName)
      if (isExpired == true) {
        exists = false
      }
    }
  } catch (ex) {
    throw ex
  }
  return exists
}
