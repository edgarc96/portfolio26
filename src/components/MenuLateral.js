import React from "react";

import "../../src/App.css";
import SetModal from "./Modales";

const MenuLateral = () => {
  return (
    <div className="menu-lateral">
      <img
        src="https://i.ibb.co/2tbG0KW/Edgar-Ninja.png"
        alt="anonymus"
        class="imgs"
      ></img>
      <ul>
        <h6>
          <p>I am an experienced full-stack developer and skilled pentester.</p>
          With a strong background in both front-end and back-end technologies,
          I create robust and user-friendly applications.
          <p>
            My expertise in penetration testing enhances my ability to ensure
            the security and reliability of the software solutions I develop.
          </p>
        </h6>

        <SetModal />
      </ul>
    </div>
  );
};

export default MenuLateral;
