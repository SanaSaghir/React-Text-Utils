import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'  
import Alert from './Components/Alert'
import TextForm from './Components/TextForm'  
//import About from './Components/About' 
import { useState } from 'react';
import {BrowserRouter as Router, RouterProvider, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      //document.body.style.backgroundColor='#0a0b24';
      showAlert(" Dark Mode has been enabled","success")
     /* document.title = "TextUtils -Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is Amazing"
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now"
      }, 1500);*/
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert(" Light Mode has been enabled","success")
    }
  }
  const toggleModeChange=()=>{
    document.body.style.backgroundColor='rgb(60, 34, 10)';
    document.getElementById('exampleFormControlTextarea1').style.backgroundColor='rgb(85, 61, 38)'
  }
  const toggleModeChangeSwitch2=()=>{
    document.body.style.backgroundColor='rgb(43, 60, 28)';
    document.getElementById('exampleFormControlTextarea1').style.backgroundColor='rgb(87, 111, 66)'
  }
  const toggleModeChangeSwitch3=()=>{
    document.body.style.backgroundColor='black';
    document.getElementById('exampleFormControlTextarea1').style.backgroundColor='#0f1011'
  }
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleModeChange={toggleModeChange} toggleMode={toggleMode} toggleModeChangeSwitch2={toggleModeChangeSwitch2} toggleModeChangeSwitch3={toggleModeChangeSwitch3} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} toggleModeChange={toggleModeChange} heading="Enter text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;

{/*<Router>
<Navbar title="TextUtils" mode={mode} toggleModeChange={toggleModeChange} toggleMode={toggleMode} toggleModeChangeSwitch2={toggleModeChangeSwitch2} toggleModeChangeSwitch3={toggleModeChangeSwitch3} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={ 
          <TextForm showAlert={showAlert} toggleModeChange={toggleModeChange} heading="Enter text to analyze below" mode={mode}/>} />
      </Routes>
      <TextForm showAlert={showAlert} toggleModeChange={toggleModeChange} heading="Enter text to analyze below" mode={mode}/>
</div>
<div className="container my-3">
  <About/>
</div>
</Router>*/}