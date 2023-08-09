import React from "react";
import "../App.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

function Intro() {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });
  const [text] = useTypewriter({
    words: ["Web Designer!", "Web Developer", "Database Manager!"],
    delaySpeed: 1500,
    deleteSpeed: 100,
    loop: true,
  });

  return (
    <>
      <div className="intro__wrapper" id="intro">
        <img src="images/intro.webp" className="background" alt="intro" />
        <div className="info__wrapper">
          <h1
            ref={myRef}
            className={myElementIsVisible ? "animateMyIntro" : "hide"}
          >
            Hey, I'm Ronnel
          </h1>
          <h2>
            <span className="typewritter">{text}</span>
            <span className="style__type">
              <Cursor cursorStyle="<" />
            </span>
            <p
              ref={myRef}
              className={myElementIsVisible ? "animateMyIntroInfo" : "hide"}
            >
              Im a Fullstack developer for 2 years and still in the process of
              learning. Im spending most of my time practicing and learning api,
              frameworks and integration technique to expand my knowledge.
            </p>
            <a
              href="http://m.me/ronnel.santos08"
              target="_blank"
              rel="noreferrer"
            >
              <button>Contact me</button>
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Intro;
