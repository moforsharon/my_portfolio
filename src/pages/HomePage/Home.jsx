import React from 'react';
import { useState, useEffect } from 'react';
import heroImage from '../../images/IMG_2107.jpg';
import Navbar from '../../components/NavBar/Navbar';
import { FaFileDownload } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from "../../pages/SkillsPage/Skills"
import Projects from '../ProjectsPage/Projects';
import ContactMe from '../ContactPage/Contact';
import Footer from '../../components/Footer/Footer';
import "./Home.css"
import ScrollToTopButton from '../../components/ScrollToTopBtn/Scroll';


const HomePage = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSection, setActiveSection] = useState(null); // Track active section

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll('.section');

        const options = {
            root: null,
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update active section
                    entry.target.classList.add('fade-in');
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <nav className="bg-primary-color shadow-md fixed top-0 left-0 right-0">
                <div className="container  flex justify-between items-center p-4">
                    <div className="text-xl font-bold text-white">Sha🎉</div>
                    <div className="hidden md:flex space-x-4 text-sm text-white relative left-20">
                        <a href="#about" className={`nav-link hover:text-secondary-color ${activeSection === 'about' ? 'active' : ''
                            }`} onClick={() => scrollToSection('about')}>About</a>
                        <a href="#skills" className={`nav-link hover:text-secondary-color ${activeSection === 'skills' ? 'active' : ''
                            }`} onClick={() => scrollToSection('skills')}>Skills</a>
                        <a href="#projects" className={`nav-link hover:text-secondary-color ${activeSection === 'projec' ? 'active' : ''
                            }`} onClick={() => scrollToSection('projec')}>Projects</a>
                        <a href="#contact" className={`nav-link hover:text-secondary-color ${activeSection === 'contact' ? 'active' : ''
                            }`} onClick={() => scrollToSection('contact')}>Contact</a>
                    </div>
                    <div className="hidden md:flex space-x-5 text-white relative lg:left-10 mr-5">
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
                        <a href="#about" className="block py-2 ml-4 nav-link"  onClick={() => scrollToSection('about')}>About</a>
                        <a href="#skills" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('skills')}>Skills</a>
                        <a href="#projects" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('projec')}>Projects</a>
                        <a href="#contact" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
                    </div>
                )}
            </nav>
            <div className='section flex justify-around items-center h-auto lg:h-screen md:h-screen ' id='about'>
                <div className='flex flex-col justify-center items-center md:shadow-md rounded-md mt-20 w-full  lg:w-5/6 md:w-5/6'>
                    <section className="pt-6 pb-6 flex flex-col-reverse justify-between md:flex-row h-70 lg:h-30 items-center ">
                        {/* First Div - Text */}
                        <div className="w-full md:w-1/2 pl-6 pr-6 pb-6">
                            <h1 className="text-xl md:text-xl mt-2 mb-4">Full-stack web and mobile app Developer</h1>
                            <h1 className="text-2xl md:text-2xl text-secondary-color font-medium mb-4">Hello, I'm Sharon!</h1>
                            <p className="text-lg md:text-lg  text-justify">
                                I'm an enthusiastic and skilled Full Stack Developer, specialized in MERN stack (MongoDB, Express.js, React.js, Node.js). I'm open to new ideas, quick to pick up new skills, and enjoy working as part of a team.
                            </p>
                            <div className="mt-2  flex items-center space-x-5">
                                <a href="https://twitter.com/sharon_mofor"> <FaTwitter className="social-icon hover:text-secondary-color" /></a>
                                <a href="https://github.com/moforsharon"><FaGithub className="social-icon hover:text-secondary-color" /></a>
                                <a href="https://www.linkedin.com/in/sharon-mofor-183a71217/"><FaLinkedin className="social-icon hover:text-secondary-color" /></a>
                            </div>
                        </div>
                        {/* Second Div - Image */}
                        <div className="w-3/4 lg:w-2/5 md:w-2/5">
                            <img src={heroImage} alt="Hero" className="rounded-lg shadow-md h-3/4 md:h-70 lg:h-70 w-full lg:w-3/4 md:w-3/4" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                    </section>
                    <div className="flex space-x-4 mb-6">
                        {/* Download Button
                        <button
                            className="bg-primary-color rounded-md py-2 px-4 text-white flex items-center space-x-2 text-sm"
                            onClick={handleDownload}
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </button> */}

                        {/* Hire Me Button */}
                        <button className="bg-green-600 rounded-md py-2 px-4 text-sm text-white">
                            <a href="#contact" onClick={() => scrollToSection('contact')}>Hire Me</a>
                        </button>
                    </div>
                </div>
            </div>
            <div id='skills' className='section'>
                <Skills />
            </div>
            <div id='projec' className='section'>
                <Projects />
            </div>
            <div id='contact' className='section'>
                <ContactMe />
            </div>
            <ScrollToTopButton />
            <Footer />

        </div>
    );
};

export default HomePage;
