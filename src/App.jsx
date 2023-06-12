import React from 'react'
import { Routes, Route } from 'react-router-dom';

import * as Pages from './Pages'
import { NavBar } from './components'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path='/anotherpage' element={<Pages.AnotherPage />} />
          <Route path='*' element={<Pages.NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App