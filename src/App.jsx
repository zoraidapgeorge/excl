// import { useState } from 'react';
import logo1 from './assets/logo1.png'
import logo from './assets/logo.png'
import key from './assets/key.png'
import './App.css'
import Login from './login'

function App() {

 
 
  return (
    <>
    <div className='modal'>

    <div style={{position: "relative", top: "-7%"}}>
        <div className='signInoptions' style={{textAlign:"center"}}>
          <img src={key} width={25} align="left" style={{position: "relative", left: "110px", top: "-5px"}} alt="" />
          <strong style={{color:"rgb(32,107,68)", paddingLeft:"15px"}}>Sign in using other options</strong>
        </div>
   
    
     <div className='form'>
        <div className='imageLeft' >
        <img src={logo1} width={110} align="left"   alt="" />
        </div>
          <div className='imageRight' >
           <img src={logo} width={50} align="right" alt="" />
          </div>

    <br/>
              <div className=''>
                  <div >
                    <p style={{color:" white", fontSize:"20px"}}>This File is Protected by ExcelOffice</p>
                    <p className='formHead'>Please Sign in to access the File</p>
                  </div>
              </div>
              <Login />
     </div>
      </div>
     </div>
    </>
  )
}

export default App
