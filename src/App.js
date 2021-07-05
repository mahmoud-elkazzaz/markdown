import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardBody } from 'react-simple-card';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';

function App() {
  const initialText = "![ReactJS Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png)"
  const [text, setText] = useState(initialText)
  const [editorIcon, setEditorIcon] = useState(<FaExpandArrowsAlt />)
  const [previewerIcon, setPreviewerIcon] = useState(<FaExpandArrowsAlt />)
  const [editorCheck, setEditorCheck] = useState(false)
  const [previewerCheck, setPreviewerCheck] = useState(false)
  const editorCard = useRef();
  const previewerCard = useRef();
  const editorInput = useRef();
  const previewerInput = useRef();
  const editorText = useRef();
  const previewerText = useRef();

  const textChange = (e) => setText(e.target.value)
  
  const handleEditorResize = () => {
    if(!editorCheck) {
    editorText.current.style.height = "70vh"
    previewerCard.current.style.display = "none"
    setEditorIcon(<FaCompressArrowsAlt />)
    } else {
      editorText.current.style.height = "100px"
      previewerCard.current.style.display = "block"
      setEditorIcon(<FaExpandArrowsAlt />)
    }

    setEditorCheck(!editorCheck)
  }

  const handlePreviewerResize = () => {
    if(!previewerCheck) {
      previewerText.current.style.minHeight = "100vh"
      editorCard.current.style.display = "none"
      setPreviewerIcon(<FaCompressArrowsAlt />)
    } else {
      previewerText.current.style.minHeight = "20vh"
      editorCard.current.style.display = "block"
      setPreviewerIcon(<FaExpandArrowsAlt />)
    }

    setPreviewerCheck(!previewerCheck)
  }
  
  return(
    <div id="container">
      <div ref={editorCard} id="editor">
          <Card className="card">
            <CardHeader className="header">
              Editor
            <span onClick={handleEditorResize} className="icon" ref={editorInput}>{editorIcon}</span>
            </CardHeader>
            {/* <CardBody>  */}
          <textarea ref={editorText} className="text-area" id="editor-text" rows="5" cols="75" value={text} onChange={textChange} />
            {/* </CardBody> */}
          </Card>
      </div>
      <div ref={previewerCard} id="previewer">
        <Card className="card">
          <CardHeader className="header">
            Previewer
            <span onClick={handlePreviewerResize} className="icon" ref={previewerInput}>{previewerIcon}</span>
           </CardHeader>
           {/* <CardBody> */}
          <span ref={previewerText} id="markdown" className="text-area" >
            <Markdown>{text}</Markdown>
          </span>
           {/* </CardBody> */}
        </Card>
      </div>
    </div>  
  )
}

export default App;