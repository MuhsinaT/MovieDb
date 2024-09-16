import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <Header/>
   <Routes>
     < Route path='/' element={<Landing/>}/>
     <Route path='/home' element={<Home/>}/>
   </Routes>
   <ToastContainer />

    </>
  )
}

export default App
