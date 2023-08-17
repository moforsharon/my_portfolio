import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        // <nav className="bg-primary-color shadow-md fixed top-0 left-0 right-0">
        //     <div className="container  flex justify-between items-center p-4">
        //         <div className="text-xl font-bold text-white">Sha🎉</div>
        //         <div className="hidden md:flex space-x-4 text-sm text-white">
        //             <a href="#home" className="nav-link hover:text-secondary-color" onClick={() => scrollToSection('home')}>Home</a>
        //             <a href="#about" className="nav-link hover:text-secondary-color" onClick={() => scrollToSection('about')}>About Me</a>
        //             <a href="#skills" className="nav-link hover:text-secondary-color" onClick={() => scrollToSection('skills')}>Skills</a>
        //             <a href="#projects" className="nav-link hover:text-secondary-color" onClick={() => scrollToSection('projects')}>Projects</a>
        //             <a href="#contact" className="nav-link hover:text-secondary-color" onClick={() => scrollToSection('contact')}>Contact</a>
        //         </div>
        //         <div className="hidden md:flex space-x-5 text-white">
        //             <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon" /></a>
        //             <a href="https://github.com/moforsharon"><FaGithub className="social-icon" /></a>
        //             <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon" /></a>
        //         </div>
        //         <div className="md:hidden flex items-center space-x-5 text-white">
        //             <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon" /></a>
        //             <a href="https://github.com/moforsharon"><FaGithub className="social-icon" /></a>
        //             <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon" /></a>
        //             <button onClick={toggleLinks} className="text-xl text-white">
        //                 ☰
        //             </button>
        //         </div>
        //     </div>
        //     {showLinks && (
        //         <div className="md:hidden border-t border-secondary-color text-white bg-primary-color">
        //             <a href="#home" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('home')}>Home</a>
        //             <a href="#about" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('about')}>About</a>
        //             <a href="#skills" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('skills')}>Skills</a>
        //             <a href="#projects" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
        //             <a href="#contact" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
        //         </div>
        //     )}
        // </nav>
        <p></p>
    );
};

export default Navbar;
