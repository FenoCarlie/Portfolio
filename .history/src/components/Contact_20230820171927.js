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
            document.body.style.background = ""; // Réinitialiser le style du corps lorsque le composant est démonté
        };
    }, []);

    return (
        <div className="banner contact">
            <div className="my_container">

            </div>
        </div>
    );
};

export default Contact;
