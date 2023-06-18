import React, { useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




const IDEPage = () => {
  const [lang, setLang] = useState('cpp14');
  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    console.log(selectedLang);
  };
  return (
    <div> 
      <Navbar />
      <h1 style = {{textAlign:"center",margin :"10px 0"}}>Code Editor</h1>
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={lang} onChange={handleLanguageChange}>
        <option value="cpp14" >C++ 14</option>
        <option value="python3">Python 3</option>
        <option value="java">Java</option>
        <option value="bash">Bash</option>
        <option value="c">C</option>
        <option value="csharp">C#</option>
        <option value="erlang">Erlang</option>
        <option value="go">GO Lang</option>
        <option value="kotlin">Kotlin</option>
        <option value="nodejs">NodeJS</option>
        <option value="php">PHP</option>
        <option value="r">R Language</option>
        <option value="ruby">Ruby</option>
        <option value="swift">Swift</option>
      </select>
      <CodeEditor language={lang} />
      <br />
      <Footer />
    </div>
  )
}

export default IDEPage