import React from 'react'
import './Project.css'
// import Ife from "../assets/ife.png"
import Rex from "../assets/Rexcre8.svg"
import City from "../assets/city.svg"
import Express from "../assets/Express.svg"
import Meta from "../assets/Meta.svg"
import Modern from "../assets/modern.svg"


const Project = () => {
    return (
        <div className='about' id='project'>
            <div className='line'></div>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                className='mesel'>SELECTED PROJECTS</div>

            <div className='container'>
                <div className='main'>
                    <div className='name'>
                        <p
                            data-aos="zoom-out"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >City Delivery</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >City delivery is a web application<br></br>
                            that allows user to other for food<br></br>
                            at there comfort and get it delivered<br></br>
                            to them in no time.</p>
                    </div>
                    <div
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='img'>
                        <a href='https://food-delivery-app-xi.vercel.app/'><img src={City} style={{ width: 250, height: 200 }} alt="city img"></img></a></div>
                </div>
            </div>

            <div className='container_i'>
                <div className='main'>
                    <div className='name'>
                        <p
                            data-aos="zoom-out"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >Express Rest</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >Express Rest is the most preferred <br></br>
                            hotel in West Africa and it's all<br></br>
                            about the right mix! Located in the <br></br>
                            heart of Victoria Island and shielded <br></br>
                            from the hustle and bustle of the <br></br>
                            Lagos metropolis.</p>
                    </div>
                    <div
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='img'>
                        <a href='https://www.figma.com/file/rJmnsNLSo42LluO7qx1TIy/Express-Rest?node-id=1%3A2&t=2JnWde166JNQZIqh-0'>
                            <img src={Express} style={{ width: 250, height: 200 }} alt=" Express img"></img></a></div>
                </div>
            </div>

            <div className='container_im'>
                <div className='main'>
                    <div className='name'>
                        <p
                            data-aos="zoom-out"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >Metabnb</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >we provide you access to luxury<br></br>
                            and affordable houses in the <br></br>
                            metaverse, get a chance to turn<br></br>
                            your imagination to reality at<br></br>
                            your comfort zone</p>
                    </div>
                    <div
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='img'>
                        <a href='https://metabnb-red.vercel.app/'>
                            <img src={Meta} style={{ width: 250, height: 200 }} alt="Metabnb img"></img></a></div>
                </div>
            </div>

            <div className='container'>
                <div className='main'>
                    <div
                        data-aos="zoom-out"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='name'>
                        <p>Rexcre8</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >RexCre8 is an organization<br></br>
                            that helps people, businesses<br></br>
                            and organization get solution<br></br>
                            to there creative problem.</p>
                    </div>
                    <div
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='img'>
                        <a href='https://rex-bice.vercel.app'><img src={Rex} style={{ width: 250, height: 200 }} alt="Rexcre8 img"></img></a></div>
                </div>
            </div>

            <div className='container_i'>
                <div className='main'>
                    <div className='name'>
                        <p
                            data-aos="zoom-out"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >HooBank</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >HooBank is a bank that focuses<br></br> on a world
                            class payment method<br></br> that is highly secured
                            and reliable.</p>
                    </div>
                    <div
                        data-aos="zoom-in-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='img'>
                        <a href='https://modern-bank-app-ifeday1.vercel.app/'>
                            <img src={Modern} style={{ width: 250, height: 200 }} alt=" Express img"></img></a></div>
                </div>
            </div>


        </div>
    )
}

export default Project