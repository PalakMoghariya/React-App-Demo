import React, { useState } from 'react'

export default function TextForm(props) {
    const {text, setText} = useState("Input Your Text");

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);

    }
    const handleUpChange = () =>{
        // console.log("Enter Your Text");
        var newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoChange = () =>{
        // consol.log("Btn Click");
        var newText = text.toLowerCase();
        setText(newText);
    }
    const handleSpeak = () =>{
        var newText = new SpeechSynthesisUtterance();
        newText.text=text;
        window.speechSynthesis.speak(newText);
    }
    const handleClear = () =>{
        setText('');    
    }
  return (
    <>
    <div>
    <div className='container my-4'>
      <h1>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
        <button className='my-4 mx-3 btn btn-secondary' onClick={handleUpChange}>Upper Case Letter</button>
        <button className='my-4 mx-3 btn btn-secondary' onClick={handleLoChange}>Lower Case Letter</button>
        <button className='my-4 mx-3 btn btn-secondary' onClick={handleSpeak}>Speak</button>
        <button className='my-4 mx-3 btn btn-secondary' onClick={handleClear}>Clear</button>
    </div>
    </div>

    <div className="container">
        <h1>Text Summary</h1>
        <p> Words</p>
    </div>
    </>
  )
}
