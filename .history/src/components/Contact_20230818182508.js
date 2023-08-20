import React from "react";

const banner = document.getElementsByClassName ('banner') [0];
        const style = window.getComputedStyle (banner);
        var background = style.getPropertyValue ("background");
        background = background.replace (" 0%", " 100%");
        background = background.replace ("100%)", " 0%)");
        document.body.style.background = background;

const Contact = () => {
    return (
        <div>
            <h1>This is Contact Page</h1>
        </div>
    )
}

export default Contact;