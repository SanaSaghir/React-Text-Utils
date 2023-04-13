import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange=(event)=>{
        //sconsole.log("handle on change")
        setText(event.target.value)
    }
    const handleFontSize=(e)=>{
      setSize(e.target.value)
      props.showAlert("Font size is been incremented.","success")
    }
    const handleUpClick=()=>{
        //console.log("up click"+text)
        let newText = text.toUpperCase();;
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick=()=>{
        //console.log("up click"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been clear","success")
    }
    const handleCopy=()=>{
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been Copied!","success")
    }
    const handleClearExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space are been Removed!","success")
    }
   
    // with the help of the useState, react update it 
    const [text, setText] = useState("");
    const [size, setSize] = useState(15);

    // text="change it" WRONG way of changing tshe state
    // setText("change it ") CORRECT way of changing the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{marginTop:"40px", fontSize:`${size}px`,backgroundColor:props.mode==='dark'?props.toggleModeChange:'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} id='bttn' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} id='bttn' onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} id='bttn' onClick={handleClearExtraSpace}>Remove Extra Spaces</button> 
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} id='bttn' onClick={handleClearClick}>Clear Text</button>
        <div className="fontSize my-3">
          <b><span>Adjust Your font Size</span></b>
          <input type="number" value={size} style={{backgroundColor:props.mode==='dark'?'#0b0c0d':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleFontSize} />
        </div>
        
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary is here</h2>
        <p>{text.split(" ").length-1} <b>words</b> and {text.length} <b>characters</b></p>
        <p>{0.008 * (text.split(" ").length-1)} <b>Minutes</b> time to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox to Preview here"}</p>
    </div>
    </>
  )
}
