import React from "react";
import { Routes as Routes_, Route } from 'react-router-dom'
import Home from "./Home";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Card1 from "./Cards/Card1";




function Routes() {
    return (
      <Routes_>
     
     <Route path='/' element={<Home/>}></Route>
      <Route path='/form1' element={<Form1/>}></Route>
      <Route path='/form2' element={<Form2/>}></Route>
      <Route path='/card1' element={<Card1/>}></Route>


      {/* <Route path='learningFom' element={<FormLearing/>}></Route>
      <Route path='confirmBooking' element={<ConfirmPage/>}></Route>
      <Route path='confirmEducation' element={<ConfirmLearning/>}></Route> */}
  </Routes_>
    );
  }
  
  export default Routes;  