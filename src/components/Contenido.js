import React from "react";
import Terminal from "./Terminal";
import Forensic from "./Forensic";

const Contenido = ({ children }) => {
  return (
    <div className="contenido">
      <header className="header"></header>
      <div className="row">
        <div className="side">
          <h2>About Me &amp; My Skills like a Fullstack Developer </h2>
          <h5>Languages &amp; Frameworks, tools I use to work with:</h5>
          <p>Javascript : Node → React → Next &amp; Express</p>
          <div class="fakeimg">
            {" "}
            <p>Javascript : Node → React → Next &amp; Express</p>
            <img
              src="https://wallpapercave.com/wp/wp2465898.png"
              alt="img"
              class="imgs"
            ></img>
          </div>
          <br />
          <div class="fakeimg">
            {" "}
            <p>Python : Dj jango</p>
            <img
              src="https://wallpaperaccess.com/full/796849.jpg"
              alt="img"
              class="imgs"
            ></img>
          </div>
          <br />
          <div class="fakeimg">
            {" "}
            <p>Java </p>
            <img
              src="https://cdn.wallpapersafari.com/89/85/2rZciQ.png"
              alt="img"
              class="imgs"
            ></img>
          </div>
        </div>
        <div className="main">
          <h2>
            About me such as specialist cybersecurity and Ethical Hacker
            Certificate
          </h2>
          <h5>Skills and that tools i use for work</h5>
          <Terminal />
          <Forensic />
          <h5>Kernels that I use to work</h5>
          <div class="fakeimg">
            Kali Linux <br />
            <br />{" "}
            <img
              src="https://cdn.wallpapersafari.com/51/22/R83Ggw.jpg"
              alt="imgs"
              class="imgs"
            ></img>
          </div>
          <div class="fakeimg">
            Parrot OS <br />
            <br />{" "}
            <img
              src="https://w0.peakpx.com/wallpaper/468/927/HD-wallpaper-parrot-os-parrot-security.jpg"
              alt="imgs"
              class="imgs"
            ></img>
          </div>
        </div>
      </div>
      <div class="projects">
        <br />{" "}
        <em class="projects_1">
          {" "}
          <i class="fa fa-laptop"></i> My Projects
        </em>
        <br />
        <br />
      </div>
      <br />
      <div class="footer">
        <h2>© Ethical Hacker Certificated ™ </h2>
      </div>
    </div>
  );
};

export default Contenido;
