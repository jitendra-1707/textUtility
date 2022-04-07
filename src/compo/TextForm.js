import React , {useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("Enter the text");

  const handleOnChange = (event)=>{
    setText(event.target.value)
    
  }
  const handleOnClick = ()=>{
    
    let newText=text.toUpperCase();
    setText(newText)
    
    props.showAlert("COnddvert","danger")
  }
  const handlelower = ()=>{
    
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("COnvert","danger")
  }
  return (<>
    
    <div style={{color:props.mode==='dark'?'white':'black' }}>
    <div className="container" style= {{color:props.mode==='dark'?'grey':'white'}}>
    <h1 style={{color:props.mode==='dark'?'white':'black' }}>Text Box</h1>
    <div className="form-group">
    
    <textarea className="form-control tb01" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'#b9b78b':'white',color:props.mode==='dark'?'white':'black' }}
     onChange={handleOnChange} value = {text} rows="8"></textarea>
    
  </div>
  <button type="button" className="btn btn-primary my-1 mx-2" onClick={handleOnClick}>Upper case</button>
  <button type="button" className="btn btn-primary my-1 mx-2" onClick={handlelower}>Lower case</button>
  
  </div>
  <div className="container">
    <h2>Preview</h2>
    <p></p>
    <p>THE words are {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length}</p>
  </div>
  </div>
    </>
  )
}
