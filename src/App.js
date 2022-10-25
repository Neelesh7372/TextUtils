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
  Routes
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  // const [greymode, greyMode] = useState('light'); //whether dark mode is enable or not
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
      // document.title='TextUtils - Dark Mode';
      // setInterval( () => {
      //   document.title='TextUtils - Amazing App';
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      // document.title='TextUtils - Light Mode';
    }
  }
  
  return (
    <>
    <Router>
    <Navbar home="Home" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route exact path="/" element={
          <Textform showAlert={showAlert} title="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" heading="Enter the text to be analyzed" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
