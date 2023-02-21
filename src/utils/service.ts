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

export function resolve(cletName: string) {
  try {
    return cletCoreContract.resolve(cletName)
  } catch {}
}

export function reverse(address: string) {
  try {
    const cletName = cletCoreContract.reverseLookup(address)
    return cletName
  } catch {}
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
  } catch {}
  return exists
}
