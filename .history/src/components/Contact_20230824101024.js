import React, { useEffect } from "react";
import navIcon1 from '../img&logo/nav-icon1.svg';
import navIcon2 from '../img&logo/nav-icon2.svg';
import navIcon3 from '../img&logo/github (1).svg';

const Contact = () => {
    useEffect(() => {
        const banner = document.getElementsByClassName("banner")[0];
        const style = window.getComputedStyle(banner);
        let background = style.getPropertyValue("background");
        background = background.replace(" 0%", " 100%");
        background = background.replace("100%)", " 0%)");
        document.body.style.background = background;

        return () => {
            document.body.style.background = "";
        };
    }, []);

    return (
        <section className="banner about">
            <div className="my_container">
                <div className="row">
                    <div className="col">
                        <div className="info">
                            <h2>Contact info</h2>

                        </div>
                        <div className="social-info">
                            <h2>Social reseau</h2>
                            <div className="social-icon">
                            <a href="https://www.linkedin.com/in/carlie-feno-516063240/" className="">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://www.facebook.com/aidane.feno" className="">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://github.com/FenoCarlie"  className="">
                                <img src={navIcon3} alt="" />
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form">
                                <input type="text" className="" placeholder="name" name="name" />
                                <input type="text" className="" placeholder="email" name="email" />
                                <textarea className="" rows="5" id="comment" name="text"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
