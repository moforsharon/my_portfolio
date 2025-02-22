import React from 'react';
import { useState, useEffect } from 'react';
import heroImage from '../../images/dp.jpeg';
import Navbar from '../../components/NavBar/Navbar';
import { FaFileDownload } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Skills from "../../pages/SkillsPage/Skills"
import Projects from '../ProjectsPage/Projects';
import ContactMe from '../ContactPage/Contact';
import Footer from '../../components/Footer/Footer';
import "./Home.css"
import ScrollToTopButton from '../../components/ScrollToTopBtn/Scroll';
import { AiOutlineArrowRight } from "react-icons/ai"
import ProjectCard from '../../components/ProjectCard/ProjectCard';


const HomePage = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const projects = [
        {
            imageUrl: require('../../images/ai-prodj.png'),
            title: 'AI Document Analyst',
            desc: "Intelligent document companion that summarizes, analyzes, and explains PDF content in a conversational interface.",
            technologies: ['Next JS', 'CSS', 'Tailwindcss', 'Python'],
            liveDemoLink: 'https://pdf-ai-frontend-three.vercel.app/',
            repositoryLink: 'https://github.com/AI-planet-Project'
        },
        {
            imageUrl: require('../../images/recipe.png'),
            title: 'Recipe Finder',
            desc: "This is a web app built with React + redux for getting recipes to a wide range of meals. Check it out!",
            technologies: ['React', 'Redux', 'CSS', 'Tailwindcss'],
            liveDemoLink: 'https://recipe-finder-tau.vercel.app/',
            repositoryLink: 'https://github.com/moforsharon/recipe-finder'
        },
        {
            imageUrl: require('../../images/shortly.png'),
            title: 'Shortly',
            desc: "Shortly is a simple link shortening application",
            technologies: ['Angular', 'CSS', 'TypeScript'],
            liveDemoLink: 'http://shortl-y.infinityfreeapp.com/?i=1',
            repositoryLink: 'https://github.com/moforsharon/Shortly/tree/master'
        },
        {
            imageUrl: require('../../images/bb.png'),
            title: 'Business Boost',
            desc: "Business boost is a web platform designed for linking small business owners to investors",
            technologies: ['React', 'Tailwind', 'Node', 'Express', 'MongoDB'],
            liveDemoLink: 'https://businessboost.netlify.app/',
            repositoryLink: 'https://github.com/moforsharon/BusinessBoost_frontend'
        }
    ];

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = section.offsetTop - 50;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
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
                    setActiveSection(entry.target.id);
                    entry.target.classList.add('slide-up');
                } else {
                    entry.target.classList.remove('slide-up');
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

    const getSectionOffset = (sectionId) => {
        const section = document.getElementById(sectionId);
        return section ? section.offsetTop : 0;
    };


    return (
        <div>
            <nav className="bg-primary-color shadow-md fixed top-0 left-0 right-0">
                <div className="container  flex justify-between items-center p-4">
                    <div className="text-xl font-bold text-white">Sha🎉</div>
                    <div className="hidden md:flex space-x-4 text-sm text-white relative left-20">
                        <a href="#aboutme" className={`nav-link hover:text-secondary-color ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a>
                        <a href="#skill" className={`nav-link hover:text-secondary-color ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Skills</a>
                        <a href="#projects" className={`nav-link hover:text-secondary-color ${activeSection === 'projec' ? 'active' : ''}`} onClick={() => scrollToSection('projec')}>Projects</a>
                        <a href="#contacts" className={`nav-link hover:text-secondary-color ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a>
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
                            {showLinks ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
                {showLinks && (
                    <div className="md:hidden border-t border-secondary-color text-white bg-primary-color">
                        <a href="#aboutme" className="block py-2 ml-4 nav-link"  onClick={() => scrollToSection('about')}>About</a>
                        <a href="#skill" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('skills')}>Skills</a>
                        <a href="#projects" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('projec')}>Projects</a>
                        <a href="#contacts" className="block py-2 ml-4 nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
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
                            <a href="#contact" onClick={() => scrollToSection('contact')}>Reach out</a>
                        </button>
                    </div>
                </div>
            </div>
            <div id='skills' className='section'>
                <Skills />
            </div>
            <div id='projec' className='section'>
                <div className='section flex justify-around'>
                    <div className='section'>
                        <h1 className="text-3xl text-secondary-color text-center font-semibold mt-20">
                            Recent Projects🎉
                        </h1>
                        <p className=" text-center mt-2 p-2">
                            Ever since I began my programming journey in 2020, <br />I have been dedicatedly involved in a diverse array of projects.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-10 ml-0 mr-0 md:ml-20 md:mr-20 section">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                        <div className='flex justify-around'>
                            <a
                                href="https://github.com/moforsharon?tab=repositories"
                                className="text-white font-2xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-primary-color text-white px-4 py-2 rounded-md flex items-center mt-2 mb-4">
                                    See More Projects <AiOutlineArrowRight className="ml-1" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
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
