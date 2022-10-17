import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix Logo'
      />

      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Account'
      />
    </div>
  );
}

export default Nav;
