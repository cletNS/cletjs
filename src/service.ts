import { ethers } from 'ethers';

import {
  CLET_CONTRACT_0,
  CLET_CONTRACT_1,
  ETH_RPC,
  SKALE_RPC,
  ABI_0,
  ABI_1,
} from './constants';

const ethProvider = new ethers.JsonRpcProvider(ETH_RPC);
const cletPayContract = new ethers.Contract(
  CLET_CONTRACT_0,
  ABI_0,
  ethProvider
);

const skaleProvider = new ethers.JsonRpcProvider(SKALE_RPC);
const cletCoreContract = new ethers.Contract(
  CLET_CONTRACT_1,
  ABI_1,
  skaleProvider
);

/**@description Returns the address mapped to the cletName */
export async function resolve(cletName: string) {
  try {
    const res = (await cletCoreContract.resolve(cletName)) as string;
    if (res[1] === '') {
      throw new Error('Not a valid cletName');
    }
    return { ticker: res[0], address: res[1] };
  } catch (error) {
    console.error('Error resolving cletName');
    throw new Error(error as string);
  }
}

/**@description Returns the cletName mapped to the address */
export async function reverse(address: string) {
  try {
    const cletName = (await cletCoreContract.reverseLookup(address)) as string;
    if (cletName === '') {
      throw new Error('No matching results found');
    }
    return { cletName };
  } catch (error) {
    console.error('Error reversing address');
    throw new Error(error as string);
  }
}

/**@description Checks if a name exists, returns boolean */
export async function nameExists(cletName: string) {
  let exists: boolean;
  try {
    exists = await cletPayContract.nameExists(cletName);
    if (exists === true) {
      const isExpired = await cletPayContract.isExpired(cletName);
      if (isExpired === true) {
        exists = false;
      }
    }
  } catch (error) {
    console.error('Error validating name');
    throw new Error(error as string);
  }
  return exists;
}
