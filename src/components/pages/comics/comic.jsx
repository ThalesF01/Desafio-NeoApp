import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import Header from '../../main/header'
import { useParams } from 'react-router-dom';
import { Div, ContainerView, Img, Title } from '../../../styles/view';
import { Article } from '../../../styles/mainStyles';
import { publicKey, time, hash } from '../../../inf/keys';

export const Comic = () => {
  
const {id} =useParams()   //id do character que foi selecionada

const [comic, setComic] = useState()

useEffect(()=>{
  axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
 .then(response =>{     
      setComic(response.data.data.results[0])
  }) 
  .catch(err => console.log(err))
}, [0])

  return (
    <>
      <Header />
        <Div>
          {
            (!comic)?"Nothing here...":(
              <ContainerView>
                <Img><img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Foto do ${comic.name}`} /></Img>
                  <Article>
                    <Title>Title: {comic.title}</Title>
                      <p>Description: {(!comic.description)?"Comic without description...":(comic.description)}</p>
                      <p>Unity price: {(!comic.prices[0].price)?"Comic without price...": (comic.prices[0].price)}</p>
                    </Article>
                </ContainerView>
              )
            }
          </Div>
      </>
  );
}

export default Comic;