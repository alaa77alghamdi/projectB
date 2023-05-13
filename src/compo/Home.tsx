import { useState } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import Card6 from './Cards/Card6'

import Header from './Header1'
import Header1 from './Header1'


function Home() {


  return (
   <>
      <Header1/>

      <Card1/>
      <Card2/>
      <Card3/>
      <Card4/>
      <Card5/>
      <Card6/>
      </>
   
  )
}

export default Home