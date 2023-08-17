function Skills() {
    return (
        <div>
            {/* <Navbar /> */}
            <div className=" min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-secondary-color text-center text-2xl p-8  mb-1 mt-16 font-bold">
                    My Top Skills
                </h1>
                <p className="mb-6 ml-5 mr-5">This array of tools allows me to bring visions to life while ensuring top-notch quality and functionality.</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8  mb-8 font-bold">
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/react.png")}
                            alt="React"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">React</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/mongo.png")}
                            alt="mongo db"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">MongoDB</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/nodejs.png")}
                            alt="nodejs"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">Node JS</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/git.png")}
                            alt="git"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">Git</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/firebase.png")}
                            alt="firebase"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">Firebase</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/flutter.png")}
                            alt="flutter"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">Flutter</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/php.png")}
                            alt="php"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">PHP</p> */}
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/tailwind.png")}
                            alt="tailwindcss"
                            className="w-32 h-32 object-contain p-8"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                        />
                        {/* <p className="text-white mt-2">Tailwind CSS</p> */}
                    </div>
                </div>
                <div className="flex justify-around">
                    <p className="w-5/6 text-justify">I've used these tools to make different projects. One of them is a mobile app for controlling home appliances made with Flutter and Firebase's real-time database. I've also created several web apps using React with Redux for global state management, and for the backend enpoints, I used Node.js and Express.js, and stored data with MongoDB. You can check out these projects and more on my <a href="https://github.com/moforsharon " className="text-blue-500">GitHub</a> page.</p>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Skills