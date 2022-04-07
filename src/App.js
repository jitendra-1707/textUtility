import React , {useState} from 'react'
import './App.css';
import Alert from './compo/Alert';
import Navbar from './compo/Navbar';
import TextForm from './compo/TextForm';
import About from './compo/About';
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';





function App() {
  const [alert, setalert] = useState(null)
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type})
      setTimeout(()=>{
        setalert(null);
      },1000)
   
  }
  

  const[mode,setmode] =  useState('light')
    const toggleMode=()=>{
      if (mode==='light'){
        setmode('dark')
        document.body.style.backgroundColor='#091431'
        showAlert("Dark Mode is enabked","danger")
        
      }
      else{
      setmode('light')
      document.body.style.backgroundColor='#dff9dfe3'
      showAlert("light Mode is enabked","danger")

      }
    }
    return (
      <>
        <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
      </>
    );
}


export default App;


