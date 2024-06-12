import React, {useState} from 'react'

export default function TextForm(props) {

    const[text, setText] = useState("Input Your Text");

    const handleOnChange = (event) =>{
        setText(event.target.value);
        // console.log(setText);
    }
    const handleUpChange = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoChange = () =>{
        let newText =text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () =>{
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleSpeak = () =>{
        let newText =new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    const handleClear = () =>{
        setText(' ');
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }
  return (
    <div>
      <div className='container my-5'>
      <h1>{props.heading}</h1>
      <textarea class={`form-control text-${props.mode === 'light' ? 'light' : 'dark'} bg-${props.mode === 'dark' ? 'light' : 'dark'}`} id="exampleFormControlTextarea1" rows="6" onChange={handleOnChange} value={text}></textarea>
      <button className='btn btn-outline-secondary my-3' onClick={handleUpChange}>Convert UpperCase</button>
      <button className='btn btn-outline-secondary my-3 mx-3' onClick={handleLoChange}>Convert LowerCase</button>
      <button className='btn btn-outline-secondary my-3 mx-3' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-outline-secondary my-3 mx-3' onClick={handleSpeak}>Speak</button>
      <button className='btn btn-outline-secondary my-3 mx-3' onClick={handleClear}>Clear</button>
      <button className='btn btn-outline-secondary my-3 mx-3' onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>

      <div className='container'>
        <h2>Word Summary</h2>
        <p>{text.split(" ").length}Words</p>
        <p>{text.length}Charaters</p>
        <p>{0.008*text.length}Reading Time</p>
        <h5>Priview</h5>
        <p>{text}</p>
      </div>
    </div>
  )
}
