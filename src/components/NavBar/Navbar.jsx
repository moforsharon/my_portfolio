import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="bg-primary-color shadow-md fixed top-0 left-0 right-0">
            <div className="container  flex justify-between items-center p-4">
                <div className="text-xl font-bold text-white">Sha🎉</div>
                <div className="hidden md:flex space-x-4 text-sm text-white">
                    <a href="/" className="nav-link hover:text-secondary-color">Home</a>
                    <a href="/about" className="nav-link hover:text-secondary-color">About Me</a>
                    <a href="/skills" className="nav-link hover:text-secondary-color">Skills</a>
                    <a href="/projects" className="nav-link hover:text-secondary-color">Projects</a>
                    <a href="/contact" className="nav-link hover:text-secondary-color">Contact</a>
                </div>
                <div className="hidden md:flex space-x-5 text-white">
                    <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon" /></a>
                    <a href="https://github.com/moforsharon"><FaGithub className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon" /></a>
                </div>
                <div className="md:hidden flex items-center space-x-5 text-white">
                    <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon" /></a>
                    <a href="https://github.com/moforsharon"><FaGithub className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon" /></a>
                    <button onClick={toggleLinks} className="text-xl text-white">
                        ☰
                    </button>
                </div>
            </div>
            {showLinks && (
                <div className="md:hidden border-t border-secondary-color text-white bg-primary-color">
                    <a href="/" className="block py-2 ml-4 nav-link">Home</a>
                    <a href="/about" className="block py-2 ml-4 nav-link">About</a>
                    <a href="/skills" className="block py-2 ml-4 nav-link">Skills</a>
                    <a href="/projects" className="block py-2 ml-4 nav-link">Projects</a>
                    <a href="/contact" className="block py-2 ml-4 nav-link">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
