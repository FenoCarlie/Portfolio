import React, { useState } from 'react';

const About = () => {
  const [showDescription, setShowDescription] = useState(true);

  const shift = () => {
    const paragraphs = document.querySelectorAll('p');
    const hidden = paragraphs[1];
    const showed = paragraphs[0];

    hidden.classList.add('hide');
    showed.classList.remove('hide');
  };

  return (
    <section className="banner about">
      <div className="my_container">
        <div className="row">
          <div className="col me">
            <div className="back rectangle">
              <svg
                width="663"
                height="669"
                viewBox="0 0 663 669"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H471C577.039 0 663 85.9613 663 192V669H192C85.9613 669 0 583.039 0 477V0Z"
                  fill="#122C18"
                  fillOpacity="0.72"
                />
              </svg>
            </div>
            <div className="my_picture">
              {/* L'image de fond est appliquée ici */}
            </div>
          </div>
          <div className="col">
            <h1>About me</h1>
            {showDescription ? (
              <p className="desciption">
                I'm a passionate computer science student, currently in the
                second year of my studies. My curiosity and interest in the IT
                field have enabled me to acquire a solid knowledge base in
                programming and web development. I'm constantly on the lookout
                for new learning opportunities to develop my skills and
                familiarize myself with the latest technologies. My goal is to
                continue my professional growth in the IT field by actively
                contributing to stimulating projects.
              </p>
            ) : (
              <p className="hide">My favorite <ins>color</ins> is red.</p>
            )}
            <button onClick={shift}>Toggle</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
