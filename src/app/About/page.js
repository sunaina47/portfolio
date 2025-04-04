"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import "./About.css";
import { Card, Row, Col } from "antd";
import Skills from "@/components/Skills/Skills";
import Project from "@/components/Project/Project";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Navbar pageName="About" />
      <div className="about-container" id="about">
        <Card className="about-card" variant="borderless">
          <Row gutter={[16, 16]} justify="center" align="middle">
            <Col xs={24} md={12} className="about-text">
              Hello! 👋 I&apos;m Sunaina Kharangate, a passionate Software
              Engineer with a keen interest in building dynamic and
              user-friendly web applications. I love crafting clean, efficient,
              and responsive UI components that enhance user experience.
              <br />
              My work involves developing and integrating APIs, designing
              modular web components, and ensuring scalability and performance
              optimization. I am always eager to learn new technologies and take
              on exciting challenges. Whether it&apos;s modern UI/UX design,
              frontend performance optimization, or full-stack development, I
              strive to build impactful solutions.
            </Col>
            <Col xs={24} md={12} className="about-img-wrapper">
              <Image
                src="/images/SunainaIllustration.jpg"
                alt="Sunaina Kharangate"
                className="about-img"
              />
            </Col>
          </Row>
        </Card>
      </div>
      <Skills id="skills" />
      <Project id="projects" />
      <Footer />
    </>
  );
};

export default index;
