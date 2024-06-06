import { logDOM } from '@testing-library/react';
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Input Your Text");
    // setText=("Enter Your Text");

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpChange = () => {
      // console.log("Btn Click");
      var newText = text.toUpperCase();
      setText(newText);
    }
  return (
    <div>
        <div class="mx-5 my-5">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert to UpperCase</button>
        </div>
    </div>
  )
}
