import React from 'react';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
      <Routes>
        <Route path ='/' element={<Comics />}/>
      </Routes>
    </>
  )
}

export default App;