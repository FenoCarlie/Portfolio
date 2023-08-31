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
                        
                    </div>
                    <div className="col">
                        <form>
                        <div className="">
                            <input type="text" class="form-control" placeholder="name" name="name" />
                            <input type="text" class="form-control" placeholder="email" name="email" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
