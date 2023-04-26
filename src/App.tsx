import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './compo/Nav'
import Header from './compo/Header'
import Footer from './compo/Footer'
import Form1 from './compo/Form1'
import Card1 from './compo/Cards/Card1'
import Card2 from './compo/Cards/Card2'
import Card3 from './compo/Cards/Card3'
import Card4 from './compo/Cards/Card4'
import Card5 from './compo/Cards/Card5'
import Card6 from './compo/Cards/Card6'
import Home from './compo/Home'
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
