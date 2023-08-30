import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'
import "aos/dist/aos.css";
import AOS from "aos";

const Navbar = () => {
    //useEffect
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    const ScrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <div>


            <div className='header'>
                <nav className='navbar'>
                    <Link to="/" spy={true} smooth={true} offset={50} duration={500} className='logo'>
                        <h1
                            alt="Logo"
                            onClick={ScrollToTop}
                        >IFEOLUWA OLADENI</h1>
                    </Link>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li> */}
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>ABOUT ME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="project" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>PROJECTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='designer'>
                Designer
                & front-end
                developer
                passionate
                about crafting
                cool web
                experiences.
            </h1>

        </div>
    )
}

export default Navbar;