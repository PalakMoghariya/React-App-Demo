import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Input Your Text");

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);

    }
    const handleUpChange = () =>{
        // console.log("Enter Your Text");
        let newText = text.toUpperCase();
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
    const handleCopy = () => {
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }
  return (
    <>
    <div>
    <div className='container my-4'>
      <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleUpChange}>Upper Case Letter</button>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleLoChange}>Lower Case Letter</button>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleSpeak}>Speak</button>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleClear}>Clear</button>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleCopy}>Copy Text</button>
        <button className='my-4 mx-3 btn btn-outline-secondary' onClick={handleRemoveSpace}>Remove Extra Space</button>
    </div>
    <div className='container'>
        <h2>Word Count</h2>
        <p>{text.split(" ").length} Words</p>
        <p>{text.length} Characters</p>
        <h5>{0.005*text.length} Reading Time</h5>
        <h3>Priview</h3>
        <p>{text}</p>
    </div>
    </div>

   
    </>
  )
}
