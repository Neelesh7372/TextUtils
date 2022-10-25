// import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from './components/Navbar';
import Textform from "./components/Textform";
import {
  BrowserRouter as Router, 
  Route, 
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [greymode, greyMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';
      // setInterval( () => {
      //   document.title='TextUtils - Amazing App';
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }

  const toggleGreyMode = ()=>{
    if(greymode === 'light'){
      greyMode('secondary');
      document.body.style.backgroundColor = 'secondary';
      showAlert("Grey Mode has been enabled", "success");
    }
    else{
      greyMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} greymode={greymode} toggleMode={toggleMode} toggleGreyMode={toggleGreyMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={
          <Textform showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode} greymode={greymode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
