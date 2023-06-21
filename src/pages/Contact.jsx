import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='about' id='contact'>
            <div className='line'></div>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                className='me'>CONTACT</div>
            <div
                data-aos="flip-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='contact'>
                <h1 className='free'>
                    Feel Free<br></br>
                    To Contact<br></br>
                    Me
                </h1>
                <div className='social'>
                    <a className='be' href='https://www.behance.net/oladeniifeoluwa' alt="behance">BEHANCE,</a><br></br>
                    <a className='be' href='https://github.com/ifeday1' alt="github">GITHUB,</a><br></br>
                    <a className='be' href='https://www.linkedin.com/in/ifeoluwa-oladeni/' alt="behance">LINKEDIN,</a><br></br>
                    <a className='be' href='mailto:oladeniifeoluwa123@gmail.com' alt="behance">GMAIL,</a><br></br>
                    <a className='be' href='https://twitter.com/OladeniIfeoluwa' alt="twitter">TWITTER.</a>
                </div>
                <a className='resume' href='https://drive.google.com/file/d/1pnDxfBaaWE4X7jpDJ4BG5krzbqE4LS0L/view?usp=share_link' alt="Resume" download>
                    DOWNLOAD RESUME
                </a>
            </div>
            <div className='line'></div>
            <div className='footer'>
                <h1 className=''>
                    DESIGNED AND DEVELOPED BY ME
                </h1>
                <h1>
                    IFEOLUWA OLADENI. C 2023
                </h1>
            </div>
        </div>
    )
}

export default Contact