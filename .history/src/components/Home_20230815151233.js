/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../Style/Home.css";
import React from "react";
import TrackVisibility from 'react-on-screen';
import picture from '../img&logo/Carlie.jpg';

const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Designer", "UI / UX Designer", "Front-end Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <div className="">
                <div className="container">
                    <div>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">-- Hello there</span>
                            <h1>{`I'm Feno Carlie.`} <p className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Designer", "UI / UX Designer", "Front-end Developer" ]'><span className="wrap">{text}</span></p></h1>
                            <h2 className="mlg">From Madagascar</h2>
                        </div>}
                        </TrackVisibility>
                    </div>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="671" height="679" viewBox="0 0 671 679" fill="none">
                        <path d="M41.1212 204.289C25.4907 213.306 18.1628 228.889 9.22384 244.428C13.7358 245.411 10.9782 252.974 9.78664 255.976C8.39653 259.478 6.2131 262.717 3.58077 265.31C-1.32047 270.137 1.34653 276.952 3.63163 282.359C12.152 302.519 24.2543 320.311 36.3396 338.308C44.7988 350.905 52.2014 364.014 61.0614 376.399C69.1334 387.682 74.1258 399.34 79.3229 412.277C87.6396 432.98 95.9147 452.753 107.249 471.895C116.898 488.19 126.761 504.427 136.651 520.56C146.066 535.919 155.102 551.852 167.121 565.125C179.53 578.83 196.666 585.252 213.054 591.994C248.273 606.484 286.307 610.157 323.692 613.737C342.865 615.573 362.13 616.662 381.274 618.809C407.133 621.707 431.601 632.222 456.508 639.472C463.91 641.627 471.398 642.843 478.584 645.839C487.692 649.635 496.324 654.645 505.341 658.68C517.748 664.231 530.257 670.253 543.288 673.948C553.842 676.941 575.588 683.096 583.169 671.035C585.805 666.84 587.793 662.086 590.595 658.032C594.167 652.866 599.17 649.41 602.397 643.897C608.984 632.64 607.879 618.54 611.197 606.13C617.387 582.977 623.999 560.771 634.647 539.336C642.305 523.921 652.293 509.849 659.318 494.07C665.98 479.106 669.297 462.139 669.949 445.674C671.68 401.949 669.137 358.126 667.457 314.461C666.683 294.354 664.936 274.402 663.336 254.357C662.225 240.423 662.565 226.212 660.59 212.382C656.357 182.75 643.367 159.408 628.034 135.014C622.155 125.661 617.603 117.742 608.755 110.951C582.951 91.1456 554.398 75.0043 526.909 58.0771C501.002 42.1243 475.201 25.6484 447.86 12.541C439.432 8.50034 430.842 4.96783 421.816 2.77552C404.97 -1.31631 381.046 -2.73897 368.1 11.8935C359.201 21.9503 355.828 33.1293 353.755 46.6391C351.737 59.7865 348.859 71.8028 338.291 79.982C312.587 99.8766 277.446 98.895 247.339 103.937C227.635 107.237 207.643 109.502 188.434 115.375C173.222 120.026 158.874 126.396 144.535 133.449C137.051 137.131 131.537 142.99 125.002 148.124C122.85 149.815 121.119 151.491 119.865 154.005C116.369 161.008 106.94 169.452 99.7209 171.54C93.1527 173.44 83.8716 175.995 78.3565 180.226C72.556 184.677 65.3804 189.097 58.8741 192.366C52.5709 195.532 47.2617 200.747 41.1212 204.289Z" fill="url(#paint0_linear_43_27)"/>
                            <defs>
                                <linearGradient id="paint0_linear_43_27" x1="335.674" y1="0" x2="335.674" y2="678.199" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C1BE65"/>
                                <stop offset="1" stop-color="#747365" stop-opacity="0.44"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <img src={ picture } alt="Superposed" className="overlay-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;