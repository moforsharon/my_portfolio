import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AiOutlineArrowRight } from "react-icons/ai"

const Projects = () => {
    const projects = [
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
            technologies: ['Angular', 'CSS' ,'TypeScript'],
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

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl text-secondary-color text-center font-semibold mt-28">
                Completed Projects🎉
            </h1>
            <p className=" text-center mt-2 p-2">
                Ever since I began my programming journey in 2020, <br/>I have been dedicatedly involved in a diverse array of projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-10 ml-0 mr-0 md:ml-20 md:mr-20">
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
                    Check More Projects <AiOutlineArrowRight className="ml-1" />
                </button>
            </a>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
