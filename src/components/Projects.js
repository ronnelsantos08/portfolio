import React, { useState } from "react";
import Modal from "./Modal";

function Projects() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="exp__container" id="projects">
      <div className="exp__wrapper">
        <h1 className="h1__exp">Projects.</h1>
        <div className="project__info">
          <div className="project__items">
            <div className="project__img">
              <img
                src="images/project1.png"
                alt="project__img"
                onClick={() => Toggle()}
              />
            </div>
            <h2>MSWDO Silang Portal</h2>
            <p>
              MWDO Silang Portal developed using HTML, CSS, JQUERY, PHP and
              mysql databse. The portal is consist of Homepage, Log-in Sytem,
              Admin Page CMS. The portal is equipped with automated mail and
              text notification. It's also Mobile integrated.
            </p>
          </div>
          <div className="project__items">
            <div className="project__img">
              <a
                href="https://thejcstudios.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="images/project2.png" alt="project__img" />
              </a>
            </div>
            <h2>JC Studios Page</h2>
            <p>
              Jc Studios website with admin page and log-in. Developed using
              react.js for UI and UX, node.js for backend framework and mongodb
              for database.
            </p>
          </div>
        </div>
      </div>
      <Modal show={modal} close={Toggle} title="MSWD Silang Portal">
        <img
          src="images/project1.png"
          alt="project__img"
          className="modal__img"
        />
        <img src="images/dswd2.png" alt="project__img" className="modal__img" />
        <img src="images/dswd3.png" alt="project__img" className="modal__img" />
        <img src="images/dswd4.png" alt="project__img" className="modal__img" />
        <img src="images/dswd5.png" alt="project__img" className="modal__img" />
        <img src="images/dswd6.png" alt="project__img" className="modal__img" />
        <img src="images/dswd7.png" alt="project__img" className="modal__img" />
      </Modal>
    </div>
  );
}

export default Projects;
