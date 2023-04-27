import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './compo/Nav'
import Header from './compo/Header'
import Footer from './compo/Footer'

import Routes from './compo/Routes'
import React from 'react'

function App() {


  return (
    <ChakraProvider>
      <Nav/>
      <Routes />
      
 <Footer/>
 


      </ChakraProvider>
  )
}

export default App
