import React, { useState } from 'react'
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'

export default function App() {
  const[mode,setMode] = useState('light');

  const[btnText,setbtnText] = useState("Enable Dark Mode");

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background="black";
      document.body.style.color="white";
      setbtnText("Enable Light Mode");
    } else {
      setMode('light');
      document.body.style.background="white";
      document.body.style.color="black";
      setbtnText("Enable Dark Mode");
    }
  }

  const toggleMode1 = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background="pink";
      document.body.style.color="black";
      // setbtnText("Enable Light Mode");
    } else {
      setMode('light');
      document.body.style.background="silver";
      document.body.style.color="black";
      // setbtnText("Enable Dark Mode");
    }
  }

  return (
    <>
      <Navbar title="GIT" aboutUs="About Text" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} btntext={btnText} />
      <TextForm heading="Enter Your Text" mode={mode}/>
    </>
  )
}
