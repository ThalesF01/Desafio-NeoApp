import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../main/header'
import { useParams } from 'react-router-dom';
import { Div, ContainerView, Img, Title } from '../../../styles/view';
import { Article } from '../../main/mainStyles';
import { publicKey, time, hash } from '../../../inf/keys';

export const Character = () => {

const {id} =useParams() //id da comic que foi selecionada

const [character, setCharacter] = useState()

useEffect(()=>{
  axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
 .then(response =>{
      setCharacter(response.data.data.results[0])
  })
  .catch(err => console.log(err))
}, [0])

  return (
    <>
    <Header />
      <Div>
        {
          (!character)?"Nothing here...":(
            <ContainerView>
              <Img><img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`Foto do ${character.name}`} /></Img>
                <Article>
                  <Title>Name: {character.name}</Title>
                  <p>Description: {(!character.description)?"Character withou description...":(character.description)}</p>
                </Article>
            </ContainerView>
          )
        }
        </Div>
    </>
  );
}

export default Character;