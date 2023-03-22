import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5'

const publicKey = 'a94e39fa014ec8b45c47f2358d0ace06';
const privateKey = '15774ea4943d696d870af8aa0628c0bd6f6af674';
const timestamp = '1679439171095';
const time = Number(new Date())


const hash = md5(time + privateKey + publicKey);

function App() {

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
  .then(response => console.log(time,response))
  .catch(err => console.error(err));
  }, []);

  return (
      <div className='marvel'>
          <h1>Teste</h1>
      </div>
  );
}

export default App;
