import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const [state, handleSubmit] = useForm("maygegez");
    if (state.succeeded) {
        return (
            <div className='flex justify-around '>
                <p className='text-green-500 text-xl mt-2 mb-4'>Message sent successfully!</p>
            </div>

        );
    }
    return (
        <div className='overflow-hidden'>

            <div className="flex justify-around">

                <div className="container flex flex-col items-center mt-20 overflow-hidden">
                    <h1 className="text-2xl text-secondary-color text-center font-semibold">Contact Me!</h1>
                    <p className=" text-center text-base p-4">
                        Do you have a project for me to work on? or an Idea? <br /> Please Reach Out!😎
                    </p>
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md mt-2 mb-4 mx-auto md:mx-0 md:w-2/3 lg:w-1/2">
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="sender-name"
                                    placeholder="Enter Your Name"
                                    className="input-field border w-full py-2 placeholder:text-sm px-2 rounded-md focus:outline-none"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="sender-email"
                                    placeholder="Enter Your Email"
                                    className="input-field border w-full py-2 placeholder:text-sm px-2 rounded-md focus:outline-none"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    placeholder="Enter Your Message"
                                    name="message"
                                    className="input-field border w-full py-2 placeholder:text-sm px-2 rounded-md focus:outline-none"
                                    value={message}
                                    onChange={handleMessageChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300 w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactMe;
