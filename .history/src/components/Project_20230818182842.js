import React from "react";

const banner = document.getElementsByClassName ('banner') [0];
console.log (banner)
if (banner !== undefined && banner != null)
    { console.log (banner);
        const style = window.getComputedStyle (banner);
        var background = style.getPropertyValue ("background");
        background = background.replace (" 0%", " 100%");
        background = background.replace ("100%)", " 0%)");
        document.body.style.background = background;
    }

const Project = () => {
    return (
        <div>
            <h1>This is Project Page</h1>
        </div>
    )
}

export default Project;