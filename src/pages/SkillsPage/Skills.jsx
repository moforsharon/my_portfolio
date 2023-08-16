import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/NavBar/Navbar"

function Skills() {
    return (
        <div>
            <Navbar />
            <div className=" min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-secondary-color text-center text-2xl p-8  mb-1 mt-16 font-bold">
                    Tools / Technologies
                </h1>
                <p className="mb-3 ml-5 mr-5">This array of tools allows me to bring visions to life while ensuring top-notch quality and functionality.</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8  mb-8 font-bold">
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/react.png")}
                            alt="React"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">React</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/mongo.png")}
                            alt="mongo db"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">MongoDB</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/nodejs.png")}
                            alt="nodejs"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">Node JS</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/git.png")}
                            alt="git"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">Git</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/firebase.png")}
                            alt="firebase"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">Firebase</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/flutter.png")}
                            alt="flutter"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">Flutter</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/php.png")}
                            alt="php"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">PHP</p>
                    </div>
                    <div className="bg-primary-color p-2 rounded-lg flex flex-col items-center">
                        <img
                            src={require("../../images/tailwind.png")}
                            alt="tailwindcss"
                            className="w-32 h-32 object-contain p-8"
                        />
                        <p className="text-white mt-2">Tailwind CSS</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skills