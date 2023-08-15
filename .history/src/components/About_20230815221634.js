import React from "react";
import picture from '../img&logo/277885383_310685924470295_5223897220565660050_n.jpg';

const About = () => {
    return (
        <section className="banner about">
            <div className="my_container">
                <div className="row">
                <div className="col me">
                        <div className="back">
                            <svg width="663" height="669" viewBox="0 0 663 669" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H471C577.039 0 663 85.9613 663 192V669H192C85.9613 669 0 583.039 0 477V0Z" fill="#122C18" fill-opacity="0.72"/>
                            </svg>
                        </div>
                        <div className="my_picture">
                            <img src={picture} alt="Superposed" className="overlay-image" />
                        </div>
                    </div>
                    <div className="col">
                        <h1>About me</h1>
                    </div>
                </div>
        </div>
        </section>
    )
}

export default About;