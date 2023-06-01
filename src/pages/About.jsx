import React from 'react'
import './About.css'
import Ife from "../assets/ife.png";

const About = () => {

    return (

        <div>


            <div className='about' id='about'>
                <div className='line'></div>
                <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    className='me'>ABOUT ME</div>
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                    className='self'>
                    A SELF-MOTIVATED AND PASSIONATE
                    DEVELOPER  WITH WILD INTEREST IN
                    CREATING DIGITAL EXPERIENCES.
                    <br></br>
                    <br></br>
                </h1>
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1500"
                    className='self'>
                    NOT ONLY WRITING CODES OR DESIGN-
                    ING BUT WRITING CLEAN CODES AND
                    BUILD EFFICIENT STUFFS THAT WOULD
                    PUT A SMILE ON THE USERS FACE.
                </h1>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='ife'>


                </div>
                <div>
                    <h1
                        data-aos="fade-down-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000"
                        className='hi'>
                        Hi there!, my name is Ifeoluwa and I'm a<br></br>
                        front-end developer, I am passionate<br></br>
                        about building web based experiences.<br></br>
                        I like to build experiences that are delightful,<br></br>
                        yet without compromising usability.
                    </h1>
                    <h1
                        data-aos="fade-down-right"
                        data-aos-easing="linear"
                        data-aos-duration="2000"
                        className='i'>
                        I am also experienced in web design, and creating
                        design for web experiences.This knowledge makes
                        it possible for me to create designs,collaborate better
                        with designers, and bridge the gap between design
                        and engineering teams by speaking the languages
                        of both disciplines.
                    </h1>
                    <h1
                        data-aos="fade-down-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="2000"
                        className='my'>
                        My experience in the industry has<br></br>
                        made me understand how<br></br>
                        collaboration and teamwork can<br></br>
                        make a product a success.
                    </h1>
                </div>
                <div className='line'></div>
                <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    className='me'>SKILL SETS</div>
                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='set'>
                    Communication
                    <br></br>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Team player
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Empathy
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Creative
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Critical thinker
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Figma
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Adobe Illustrator
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Html, CSS
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Javascript
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Typescript
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        ReactJS, NextJS
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        Gsap...
                    </div>
                    {/*                
                    Empathy
                    <br></br>
                    Creative
                    <br></br>
                    Critical thinker
                    <br></br>
                    Figma
                    <br></br>
                    Adobe Illustrator
                    <br></br>
                    Html, CSS
                    <br></br>
                    Javascript
                    <br></br>
                    Typescript
                    <br></br>
                    Git
                    <br></br>
                    ReactJS, NextJS
                    <br></br>
                    Gsap... */}
                </div>
            </div>
        </div>
    )
}

export default About;