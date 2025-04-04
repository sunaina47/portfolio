import React from "react";
import "./SocialLink.css";

const SocialLinks = ({ theme }) => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/sunainakharangate7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/images/social/linkedin${theme}.png`} alt="LinkedIn" />
      </a>

      <a
        href="https://github.com/sunaina47"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/images/social/github${theme}.png`} alt="GitHub" />
      </a>

      <a href="mailto:sunainakharangate7@gmail.com">
        <img src={`/images/social/email${theme}.png`} alt="Email" />
      </a>
    </div>
  );
};

export default SocialLinks;
