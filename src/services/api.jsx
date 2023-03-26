import axios from 'axios';
import md5 from 'md5'

const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: `https://gateway.marvel.com/v1/public/`,
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash
    },
})

export default api;