import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import  Login  from './components/login'
import Acceuil  from './components/Acceuil'
import  {EspaceForm} from './components/EspaceForm'

const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/login' element={<Login/>} />
  <Route path='/' element={<Acceuil/>} />
  <Route path='/espace' element={<EspaceForm/>} />
 </Routes>
 
 
 </BrowserRouter>
  )
}

export default App