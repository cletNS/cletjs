import { resolve, reverse, nameExists } from "./service";

const cletResolve = async (cletNameTicker: string) => {
  const resp = await resolve(cletNameTicker);
  return resp;
};

const cletReverse = async (address: string) => {
  const resp = await reverse(address);
  return resp;
};

const cletExists = async (cletName: string) => {
  const exists = await nameExists(cletName);
  return exists;
};

export const clet = {
  resolve: cletResolve,
  reverse: cletReverse,
  exists: cletExists,
};
