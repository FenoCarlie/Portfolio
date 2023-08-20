import React, { useEffect } from 'react';

function About() {
useEffect(() => {
    const mininav = document.getElementById("mininav");
    const buttons = mininav.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = shift;
});

function shift(click) {
    const mininav = document.getElementById("mininav");
    const button = mininav.querySelectorAll("button");
    const paragraphs = mininav.getElementsByClassName("slide");
    const clicked = click.target;

    let hidden, showed;

    if (clicked === button[0]) {
    hidden = paragraphs[1];
    showed = paragraphs[0];
    } else {
    hidden = paragraphs[0];
    showed = paragraphs[1];
    }

    hidden.classList.add("hide");
    showed.classList.remove("hide");
}
}, []);

return (
    <div>
        <div className='slide'>The ins element represents inserted (added) text.</div>
        <div className="hide slide">My favorite <ins>color</ins> is red.</div>

        <div id='mininav'>
            <button>About</button>
            <button>Skills</button>
        </div>
    </div>
);
}

export default About;
