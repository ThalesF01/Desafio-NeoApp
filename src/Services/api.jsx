import axios from 'axios';
import md5 from 'md5'

const publicKey = 'a94e39fa014ec8b45c47f2358d0ace06';
const privateKey = '15774ea4943d696d870af8aa0628c0bd6f6af674';
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