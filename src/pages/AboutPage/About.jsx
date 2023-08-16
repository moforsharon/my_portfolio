import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
    return (
        <div>
            <Navbar />
            <div className="h-screen flex justify-around items-center text-white bg-primary-color lg:bg-white md:bg-white">

            <section className="mt-20 h-3/4 items-center text-start m-6 p-6  bg-primary-color w-full  lg:w-4/6 md:w-4/6 shadow rounded-md">
                <h2 className="font-bold text-2xl mb-10">About me</h2>
                    <p>I am Fri Sharon Mofor, a software engineer based in Cameroon. I work on creating websites and mobile apps from start to finish. My love for learning drives me, and I thrive in collaborative team environments. I always keep an open mind, believing there's always more to learn from others.</p>
            </section>
            </div>
            <Footer />
        </div>
    )
}

export default About;