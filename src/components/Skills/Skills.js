import React from "react";
import { Col, Row } from "antd";
import skills from "@/data/skills.json";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-wrapper" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <Row gutter={[32, 32]} justify="center">
        {skills.map((skill) => (
          <Col key={skill.id} xs={8} sm={8} md={6} lg={4} xl={4}>
            <div className="skill-card">
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.skillName}
                  className="skill-icon"
                />
              )}
              <p className="skill-name">{skill.skillName}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
