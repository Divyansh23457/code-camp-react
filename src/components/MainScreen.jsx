import React from 'react'
import '../styles/MainScreen.css'
import Img from '../Images/codingimage.png'
import { Link } from 'react-router-dom'
const MainScreen = () => {
 
  return (
    <div className="screenContainer">
        <div className="left">
        Welcome to CodeCamp
                <div>"Accelerate Your Coding Journey: Excel with Our Online Code Compiler!"
                    <br />
                    {/* <span class="dynamic-text" id="element">Code in</span> */}
                    <br />
                    
                    <Link to='/compiler'><button class="button-33">Start Coding</button></Link>
                    
                </div>
        </div>
        <div className="right">
            <img src={Img} alt="nhi mili" />
        </div>
    </div>
  )
}

export default MainScreen
