import React from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="about__title" id="about__us">
        <div
          ref={myRef}
          className={myElementIsVisible ? "animateMyref" : "hide"}
        >
          <h1 className="h1__about">About Me.</h1>
        </div>
      </div>
      <div className="about__wrapper">
        <div className="about__detail__wrapper">
          <p
            id="about__info"
            ref={myRef}
            className={myElementIsVisible ? "animateMyref" : "hide"}
          >
            <span className="first-letter">W</span>atzUp, Im Ronnel Santos! I'm
            a highly motivated graduate of Information Technology looking to
            kick start my career as a Web Developer and IT related projects with
            a reputable company. Possessing enthusiasm, drive and a positive
            attitude required to be successful in programming and computer base
            environment.
          </p>
          <p id="about__info">
            I enjoy creating Web Application and accomplishing projects together
            with highly skilled team to be able to learn more in the process.I'm
            innovative and equipped with knowledge in programming. Proficient in
            writing code and debugging system.
          </p>
        </div>
        <div className="about__skills">
          <div className="title__skills">
            <h1>
              <i className="far fa-file-code"></i>Skills
            </h1>
          </div>
          <div className="skills__info">
            <button className="btn__skills">css</button>
            <button className="btn__skills">html</button>
            <button className="btn__skills">javascript</button>
            <button className="btn__skills">node.js</button>
            <button className="btn__skills">react.js</button>
            <button className="btn__skills">msql</button>
            <button className="btn__skills">jquery</button>
            <button className="btn__skills">php</button>
            <button className="btn__skills">adobe photoshop</button>
            <button className="btn__skills">adobe premiere</button>
            <button className="btn__skills">webpress</button>
            <button className="btn__skills">php</button>
          </div>
          <div className="title__skills">
            <h1>
              <i className="fas fa-laptop-code"></i>Handled Application
            </h1>
          </div>
          <div className="skills__app">
            <button className="btn__skills">Adobe Photoshop</button>
            <button className="btn__skills">Canva</button>
            <button className="btn__skills">VS code</button>
            <button className="btn__skills">Android Studio</button>
            <button className="btn__skills">Adobe Premiere Pro</button>
            <button className="btn__skills">Office App</button>
            <button className="btn__skills">Blender</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
