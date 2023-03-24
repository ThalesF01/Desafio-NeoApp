import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom'
import Header from '../../main/header'
import { Div, ContainerView, Img, Title } from '../../../styles/view';
import { Article } from '../../main/styles';

export const Character = () => {

  const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
  const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey);
  
const {id} =useParams()

let navigate = useNavigate()

const [character, setCharacter] = useState()

useEffect(()=>{
  axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
 .then(response =>{
      console.log(response.data.data.results)
      setCharacter(response.data.data.results[0])
     // console.log('Segundo log', item)
  }) 
  .catch(err => console.log(err))
}, [0])


  return (
    <>  
    <Header />
    <Div>
            {
              (!character)?"Nada aqui":(
                <ContainerView>                  
                  <Img><img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Foto do ${character.name}`} /></Img>
                  <Article>
                  <Title>Name: {character.name}</Title>
                  <p>Description: {(!character.description)?"Personagem sem descrição...":(character.description)}</p>
                  </Article>
                  </ContainerView>
                
              )
            }
            </Div>
            </>        
  );
}

export default Character;
