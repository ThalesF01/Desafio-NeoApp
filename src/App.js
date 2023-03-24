import React from 'react';
import Main from './components/main';
import Characters from './components/pages/characters';
import Comics from './components/pages/comics'
import { Comic } from './components/pages/comics/comic';
import { Character } from './components/pages/characters/character';
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
      <Routes>
        <Route path ='/' element={<Main />}/>
        <Route path ='/comics' element={<Comics />}/>
        <Route path ='/characters' element={<Characters />}/>      
        <Route path ='/comics/:id' element={<Comic />}/>
        <Route path ='/characters/:id' element={<Character />}/>        
      </Routes>
    </>
  )
}

export default App;