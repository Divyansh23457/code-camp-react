import React, { useState } from 'react';
import '../styles/CodeEditor.css'
import axios from 'axios';



const CodeEditor = (props) => {
  
  const [code,setCode] = useState('');
  const [output,setOutput]= useState('Output will be shown here');


  const handlecompile = async() =>{
    const options = {
      method: 'POST',
      url: 'https://online-code-compiler.p.rapidapi.com/v1/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'dfc16c18dcmsh2a30457731a920ap1e500ejsn32bcead17474',
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      },
      data: {
        language: props.language,
        version: 'latest',
        code: code,
        input: null
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.output);
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
    }

  }

  return (
   <div className="editor-container">
   <textarea value={code} className='text-area'  onChange={(e)=>setCode(e.target.value)}>
   </textarea>  
   <textarea title='Output' disabled={true} value={output} className='output-area' >
   </textarea> 
    <button className='compile-btn' onClick={handlecompile}>Compile and Run</button>
   </div>
  ) 
};

export default CodeEditor;
