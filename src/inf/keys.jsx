import md5 from 'md5';

export const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
export const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
export const time = Number(new Date())
export const hash = md5(time + privateKey + publicKey);