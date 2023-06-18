import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <hr style={{border : ".1px solid gray" , height : "0px",margin :"25px 0"}}/>
        <div className="container2">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About</h3>

                    <p>Our online code compiler is a powerful tool designed to help developers write, compile, and run
                        their code seamlessly in a browser-based environment. Whether you're a beginner learning
                        programming or an experienced developer, our compiler provides a user-friendly platform for
                        coding and testing your programs.</p>

                    <br/>
                </div>
                <div className="vertical-line"></div>
                <div className="footer-section">

                    <h3>Key features of our code compiler:</h3>
                    <ul>
                        <li>Real-time code editor with syntax highlighting</li>
                        <li>Quick and accurate code compilation</li>
                        <li>Support for standard input and output</li>
                        <li>Integrated debugger for efficient code debugging</li>
                        <li>Extensive library support for common programming tasks</li>
                        <li>Easy code sharing and collaboration</li>

                    </ul>

                </div>
                <div className="vertical-line"></div>
                <div className="footer-section">
                    <h3>Documentation</h3>
                    <ul>
                        <li><Link to="/about">Getting Started</Link></li>
                        <li><Link to="/about">API Reference</Link></li>
                        <li><Link to="/about">FAQs</Link></li>
                    </ul>
                    <br/>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: info@codecamp.com</li>
                        <li>Phone: +1-123-456-7890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>

                </div>

            </div>
            <hr style={{border : ".1px solid gray" , height : "0px",margin :"25px 0"}}/>
            <div className="footer-bottom">
                <p>&copy; 2023 CodeCamp Online Compiler. All rights reserved.</p>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer
