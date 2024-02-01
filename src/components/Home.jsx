import React from "react";
import "./home.css";
import Contact from "./Contact";
import About from "./About";

export const Home = () => {
    return (
        <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Contact />
                        
                        <div className="home__img"></div>
                        
                        <About />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;