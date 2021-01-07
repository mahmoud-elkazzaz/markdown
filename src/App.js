import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ReactMarkdown from 'react-markdown'


function App() {
  const [text, setText] = useState('')
  const handleChange = (e) => setText(text => e.target.value)
  return(
    <div>
      <div className="row">
        <div className="col-6 text-center p-4">
          <h1>Editor</h1>
          <textarea id="editor" value={text} onChange={handleChange} className="form-control"/>
        </div>
        <div className="col-6 text-center p-4">
          <h1>Preview</h1>
          <div id="preview" className="p-2 text-left">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>   
    </div>  
  )
}

export default App;
