import React, { useState } from "react";
import "./Home.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../Navbar/Navbar";
import SocialLinks from "../SocialLinks/SocialLinks";

const Home = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particleOptions = {
    background: {
      color: "#000000", // Pure black background
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 1200 } }, // Well spread
      color: { value: ["#00ff00", "#808080"] }, // Soft green glow
      opacity: {
        value: 0.4,
        random: false,
        animation: {
          enable: true,
          speed: 0.4,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: 15, // Large particle size
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
        bounce: false,
      },
      links: {
        enable: false, // No connecting lines
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 160,
          size: 22,
          duration: 2.5,
          opacity: 1,
          speed: 2,
        },
        repulse: {
          distance: 120,
          duration: 0.5,
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
        />
        {particlesInit && <Navbar pageName="Home" />}
        <div className={`greeting`}>
          <Fade direction="up" cascade damping={0.5}>
            <img
              className="profile"
              alt="m.jigalin profile"
              src="/images/profile.png"
            />
            <h1 className="greeting-text">
              Hi, I'm <span className="name">Sunaina Kharangate</span>.
            </h1>
            <h3 className="greeting-text">
              <Typewriter
                words={[
                  "I am a Software Developer.",
                  "I like to design things.",
                  "I love learning new tech.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </h3>
            <SocialLinks theme={"light"} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
