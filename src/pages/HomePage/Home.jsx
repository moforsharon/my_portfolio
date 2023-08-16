import React from 'react';
import heroImage from '../../images/IMG_2107.jpg';
import Navbar from '../../components/NavBar/Navbar';
import { FaFileDownload } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';


const HomePage = () => {
    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1N8kddBzP-P_m8asiizxUNa2NLNM9kc6i2c5vaU7Iob8/edit?usp=sharing'; // Replace with actual path
        link.download = 'resume.pdf';
        link.click();
    };
    return (
        <div>
            <Navbar />
            <div className='flex justify-around items-center h-auto lg:h-screen md:h-screen'>
                <div className='flex flex-col justify-center items-center shadow-md rounded-md mt-20 w-full  lg:w-5/6 md:w-5/6'>
                    <section className="pt-6 pb-6 flex flex-col-reverse justify-between md:flex-row h-70 lg:h-30 items-center ">
                        {/* First Div - Text */}
                        <div className="w-full md:w-1/2 pl-6 pr-6 pb-6">
                            <h1 className="text-xl md:text-xl mt-2 mb-4">Full-stack web and mobile app Developer</h1>
                            <h1 className="text-2xl md:text-2xl text-secondary-color font-medium mb-4">Hello, I'm Sharon!</h1>
                            <p className="text-lg md:text-lg  text-justify">
                                I'm an enthusiastic and skilled Full Stack Developer, specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js). I'm open to new ideas, quick to pick up new skills, and enjoy working as part of a team.
                            </p>
                            <div className="mt-2  flex items-center space-x-5">
                                <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon hover:text-secondary-color" /></a>
                                <a href="https://github.com/moforsharon"><FaGithub className="social-icon hover:text-secondary-color" /></a>
                                <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon hover:text-secondary-color" /></a>
                            </div>
                        </div>
                        {/* Second Div - Image */}
                        <div className="w-3/4 lg:w-2/5 md:w-2/5">
                            <img src={heroImage} alt="Hero" className="rounded-lg shadow-md h-3/4 md:h-70 lg:h-60 w-full lg:w-3/4 md:w-3/4" />
                        </div>
                    </section>
                    <div className="flex space-x-4 mb-6">
                        {/* Download Button */}
                        <button
                            className="bg-primary-color rounded-md py-2 px-4 text-white flex items-center space-x-2 text-sm"
                            onClick={handleDownload}
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </button>

                        {/* Hire Me Button */}
                        <button className="bg-green-600 rounded-md py-2 px-4 text-sm text-white">
                            <a href="/contact">Hire Me</a>
                        </button>
                    </div>
                </div>
            </div>
        <Footer/>
            
        </div>
    );
};

export default HomePage;
