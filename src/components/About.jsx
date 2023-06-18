import React from 'react'
import '../styles/About.css'

const About = () => {
    return (
        <div className='aboutContainer'>
            <h1 >Get in Touch</h1>
            <p>We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, our team is ready to assist you. Reach out to us using any of the methods below, and we'll get back to you as soon as possible.</p>

            <h1>Contact Information</h1>
            <h3>General Inquiries:</h3>
            <p>If you have any general questions or need assistance, please don't hesitate to contact us. Our knowledgeable support team is here to help.
                <br />
                Email: <a href="/">support@yourwebsite.com</a>
                <br />
                Phone: <a href="/">+1 (123) 456-7890</a>
            </p>
            <h3>Technical Support:</h3>
            <p>Encountering issues or need technical guidance? Our dedicated technical support team is available to help you troubleshoot problems and provide solutions.
            <br />
            Email: <a href="/">techsupport@yourwebsite.com</a>
            <br />
            Phone: <a href="/">+1 (123) 456-7890</a>
            </p>
            <h3>Business Partnerships:</h3>
            <p>
            For partnership inquiries or business-related discussions, we're open to exploring potential collaborations and mutually beneficial opportunities.
            <br />
            Email: <a href="/">partnerships@yourwebsite.com</a>
            <br />
            Phone: <a href="/">+1 (123) 456-7890</a>
            </p>
            <h1>Frequently Asked Questions (FAQ)</h1>
            <p>Before reaching out to us, you may want to check our Frequently Asked Questions (FAQ) section. It covers common queries and provides helpful information about our services.
                <br />
                <a href="/">FAQs</a>
            </p>
            <h1>Social Media</h1>
            <p>Stay connected with us through social media to get the latest updates, tips, and announcements. We're active on the following platforms:
            <br />
            <div className="iconsContainer">
            <a href="/" className="fa fa-facebook"></a>
            <a href="/" className="fa fa-twitter"></a>
            <a href="/" className="fa fa-instagram"></a>
            </div>
            </p>
            <h1>Office Address</h1>
            <p>If you prefer to visit us in person or send physical mail, you can find us at the following address:
            Please note that our office operates during regular business hours, Monday to Friday.
            <br />
            Cecilia Chapman
            <br />
            711-2880 Nulla St.
            <br />
            Mankato Mississippi 
            <br />
            96522
            </p>
        </div>
    )
}

export default About
