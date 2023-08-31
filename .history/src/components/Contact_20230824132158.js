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
        <section className="banner contact">
            <div className="my_container">
                <div className="row card">
                    <div className="col border">
                        <div className="info">
                            <h2>Contact info</h2><div className="info-icon">
                                <a href="https://www.linkedin.com/in/carlie-feno-516063240/" className="">
                                    <span className="icon"><img src={navIcon1} alt="" /></span><span>FENO Carlie</span>
                                </a>
                                
                                <a href="https://www.facebook.com/aidane.feno" className="">
                                <span className="icon"><img src={navIcon2} alt="" /></span><span>FENO Carlie</span>
                                </a>
                                <a href="https://github.com/FenoCarlie"  className="">
                                <span className="icon"><img src={navIcon3} alt="" /></span><span>FENO Carlie</span>
                                </a>
                            </div>
                        </div>
                        <div className="social-info">
                            <h2>Social reseau</h2>
                            <div className="info-icon">
                                <a href="https://www.linkedin.com/in/carlie-feno-516063240/" className="">
                                    <span className="icon"><img src={navIcon1} alt="" /></span><span>FENO Carlie</span>
                                </a>
                                
                                <a href="https://www.facebook.com/aidane.feno" className="">
                                <span className="icon"><img src={navIcon2} alt="" /></span><span>FENO Carlie</span>
                                </a>
                                <a href="https://github.com/FenoCarlie"  className="">
                                <span className="icon"><img src={navIcon3} alt="" /></span><span>FENO Carlie</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <form>
                            <div className="form">
                                <input type="text" className="in-box" placeholder="Name" name="name" />
                                <input type="text" className="in-box" placeholder="Email" name="email" />
                                <textarea className="in-box" rows="20" placeholder="Message" id="comment" name="text"></textarea>
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
