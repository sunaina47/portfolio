import React from "react";
import "./SocialLink.css";
import Image from "next/image";

const SocialLinks = ({ theme }) => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/sunainakharangate7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`/portfolio/images/social/linkedin${theme}.png`}
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/sunaina47"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={`/portfolio/images/social/github${theme}.png`}
          alt="GitHub"
        />
      </a>

      <a href="mailto:sunainakharangate7@gmail.com">
        <Image src={`/portfolio/images/social/email${theme}.png`} alt="Email" />
      </a>
    </div>
  );
};

export default SocialLinks;
