import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';

const ContactMe = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className="flex justify-around">

                <div className="container flex flex-col items-center mt-20 overflow-hidden">
                    <h1 className="text-2xl text-secondary-color text-center font-semibold">Contact Me!</h1>
                    <p className=" text-center text-base p-4">
                        Do you have a project for me to work on? or an Idea? <br /> Please Reach Out!😎
                    </p>
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md mt-2 mb-4">
                        <p className="font-semibold text-center text-xl mb-4">Send me a Message!</p>
                        <h2 className="text-sm font-semibold flex items-center">
                            <span className="mr-2">Email Me</span>
                            <FaEnvelope className="text-blue-700" />
                        </h2>
                        <p className="mb-4 text-xs"><a href="mailto:msharonfri@gmail.com">msharonfri@gmail.com</a></p>
                        <h2 className="text-sm font-bold flex items-center">
                            <span className="mr-2">Call Me!</span>
                            <FaPhone className="text-blue-700 mr-2" />
                        </h2>
                        <p className="mb-4 text-xs"><a href="tel:+237654530129">+237654530129</a></p>
                        <h2 className="text-sm font-bold flex items-center">
                            <span className="mr-2">or Message Me!</span>
                            <FaWhatsapp className="text-blue-700 mr-2" />
                        </h2>
                        <p className="mb-4 text-xs"><a href="https://wa.link/2cczar">
                            wa.link/2cczar</a></p>
                        <div className="flex justify-center items-center space-x-2 mt-4">
                            <a href="https://github.com/moforsharon" target="_blank" rel="noopener noreferrer" className="">
                                <FaGithub />
                            </a>
                            <a href="https://twitter.com/sharon_mofor" target="_blank" rel="noopener noreferrer" className="">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/" target="_blank" rel="noopener noreferrer" className="">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactMe;
