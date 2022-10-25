// import React from "react"

import React, { useState } from "react";

export default function Textform(props) {

// let myStyle={
//     color: 'white',
//     backgroundColor: 'black'
// }

  const handleUpClick = () => {
    // console.log(text);
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to Upper Case!","success");
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lower Case!","success");
  };
  const handleClearClick = () => {
    let clr ='';
    setText(clr);
    props.showAlert("Text cleared!","success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  };
  const handleExtraSpaces = () => {
    let newtxt=text.split(/[ ]+/);
    setText(newtxt.join(" "));
    props.showAlert("Extra Spaces removed!","success");
  }
  const handleSpeak = () => {
    let txt=new SpeechSynthesisUtterance();
    txt.text= text;
    window.speechSynthesis.speak(txt);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  // text="some text"; //wrong way to change the state
  // setText("Enter text");
  return (
    <>
      <div className="container"  style={{color: props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='light'?'black':'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleCopy}>
          Copy Text
        </button>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className={`btn btn-outline-${props.mode === 'light'?'dark':'light'} mx-2 my-2`} onClick={handleSpeak}>
          Speak
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{text.length===0?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter some text above to preview it here"}</p>
        <br/>
      </div>
    </>
  );
}
