import React, { Component } from "react";

export default class Terminal extends Component {
  render() {
    return (
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-header-button terminal-header-button-close"></span>
          <span className="terminal-header-button terminal-header-button-minimize"></span>
          <span className="terminal-header-button terminal-header-button-expand"></span>
        </div>
        <div className="terminal-body">
          <p>
            I am an experienced IT professional with a strong passion for
            technology and problem-solving.
            <br />
            <br />
            With several years of hands-on experience in the IT industry, I have
            developed a comprehensive skill set that allows me to tackle various
            challenges in the world of Information Technology.
            <br />
            <br />
            My expertise lies in the design, implementation, and maintenance of
            IT systems, both hardware and software.
            <br />
            <br />I am well-versed in troubleshooting technical issues and
            providing efficient solutions to ensure smooth operations for
            businesses and individuals.
            <br />
            <br />
            Comunnicate with me "I invite you to connect with me through my
            portfolio website, where refined aesthetics and visionary creativity
            converge, igniting possibilities for exceptional collaborations."
          </p>
          <br />
          <br />
          <p>
            Apart from my technical skills, I am an excellent communicator,
            capable of conveying complex technical concepts in a clear and
            concise manner
          </p>
        </div>
      </div>
    );
  }
}
