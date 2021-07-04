import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'react-simple-card';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ReactMarkdown from 'react-markdown'
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa';


function App() {

  const [text, setText] = useState('')
  const [editorIcon, setEditorIcon] = useState(<FaExpandArrowsAlt />)
  const [previewerIcon, setPreviewerIcon] = useState(<FaExpandArrowsAlt />)
  const [editorCheck, setEditorCheck] = useState(false)
  const [previewerCheck, setPreviewerCheck] = useState(false)
  const editorCard = useRef();
  const previewerCard = useRef();
  const editorInput = useRef();
  const previewerInput = useRef();

  const textChange = (e) => setText(e.target.value)
  
  // const handleEditorChange = () => {
  //   if(!editorCheck) {
  //   editorCard.current.style.height = "100vh"
  //   previewerCard.current.style.display = "none"
  //   setEditorIcon(<FaCompressArrowsAlt />)
  //   } else {
  //     editorCard.current.style.height = "100px"
  //     previewerCard.current.style.display = "block"
  //     setEditorIcon(<FaExpandArrowsAlt />)
  //   }

  //   setEditorCheck(!editorCheck)
  // }

  // useEffect(() => {
  //   editorInput.current.addEventListener('onChange', handleEditorChange)
  // })
  

  // const handlePreviewerChange = () => {
  //   if(!previewerCheck) {
  //     editorCard.current.style.display = "none"
  //     setPreviewerIcon(<FaCompressArrowsAlt />)
  //   } else {
  //     editorCard.current.style.display = "block"
  //     setPreviewerIcon(<FaExpandArrowsAlt />)
  //   }

  //   setPreviewerCheck(!previewerCheck)
  // }

  // useEffect(() => {
  //   previewerInput.current.addEventListener('onChange', handlePreviewerChange)
  // })

  const handleClick = () => {
    console.log("Clicked")
  }

  return(
    <div id="container">
      <div ref={editorCard} id="editor">
          <Card className="card">
            <CardHeader className="header">
              Editor
            <span><FaExpandArrowsAlt onClick={handleClick} class="icon" ref={previewerInput} /></span>
              {/* <input ref={editorInput} type="checkbox" checked={editorCheck} /> */}
            </CardHeader>
            {/* <CardBody>  */}
              <textarea id="editor-text" rows="5" cols="75" className="text-area" value={text} onChange={textChange} />
            {/* </CardBody> */}
          </Card>
      </div>
      <div ref={previewerCard} id="previewer">
        <Card className="card">
          <CardHeader className="header">
            Previewer
            <span><FaExpandArrowsAlt onClick={handleClick} class="icon" ref={previewerInput} /></span>
          {/* <input  type="checkbox" checked={previewerCheck} /> */}
           </CardHeader>
           {/* <CardBody> */}
             <ReactMarkdown id="markdown" className="text-area">{text}</ReactMarkdown>
           {/* </CardBody> */}
        </Card>
      </div>
    </div>  
  )
}

export default App;
