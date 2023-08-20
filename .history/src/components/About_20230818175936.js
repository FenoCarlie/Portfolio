import React, { useEffect } from 'react';

function About() {
useEffect(() => {
    const mininav = document.getElementById("mininav");
    const buttons = mininav.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = shift;
});

const banner = document.getElementsByClassName ('banner') [0];
const style = window.getComputedStyle (banner);
const background = style.getPropertyValue ("background");
console.log (background);

function shift(click) {
    const mininav = document.getElementById("mininav");
    const button = mininav.querySelectorAll("button");
    const paragraphs = document.getElementsByClassName("slide");
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
    <section className="banner about">
    <div className="my_container">
        <div className="row">
            <div className="col me">
                <div className="back">
                    <svg width="663" height="669" viewBox="0 0 663 669" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H471C577.039 0 663 85.9613 663 192V669H192C85.9613 669 0 583.039 0 477V0Z" fill="#122C18" fillOpacity="0.72"/>
                    </svg>
                </div>
                <div className="my_picture">
                    {/* L'image de fond est appliquée ici */}
                </div>
            </div>
            <div className="col">
                <h1>About me</h1>
                <div id='mininav'>
                    <button>About</button>
                    <button>Skills</button>
                </div>
                <div className="desciption slide">
                I'm a passionate computer science student, currently in the second year of my studies. My curiosity and interest in the IT field have enabled me to acquire a solid knowledge base in programming and web development. I'm constantly on the lookout for new learning opportunities to develop my skills and familiarize myself with the latest technologies. My goal is to continue my professional growth in the IT field by actively contributing to stimulating projects.
                </div>
                <div>
                    <p className="hide slide">My favorite <ins>color</ins> is red.</p>
                </div>
            </div>
        </div>
    </div>
</section>
);
}

export default About;