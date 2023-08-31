import React, { useEffect } from "react";

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
                        <div>
                            <h2>Contact info</h2>
                            
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
