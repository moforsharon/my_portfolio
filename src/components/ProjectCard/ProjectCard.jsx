import React from 'react';

const ProjectCard = ({ imageUrl, title, technologies, liveDemoLink, repositoryLink, desc }) => {
    return (
        <div className='flex justify-around'>

        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col w-full  mx-4">
            <img src={imageUrl} alt={`Project ${title}`} className="w-full h-52 object-fit rounded-md mb-8" />
            <h2 className="text-lg font-semibold mb-2 text-secondary-color">{title}</h2>
                <p className='mb-4 text-sm'>{desc}</p>
            <p className="text-gray-600 mb-4">
                <span className="font-semibold">Technology Used:</span>
                    <ul className="list-disc pl-4  text-sm">
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </p>
            <div className="flex justify-between">
                <a href={liveDemoLink} className="text-secondary-color" target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href={repositoryLink} className="text-secondary-color" target="_blank" rel="noopener noreferrer">
                    Repository
                </a>
            </div>
        </div>
        </div>
    );
};

export default ProjectCard;
