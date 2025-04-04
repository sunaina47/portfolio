import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import projects from "@/data/projects.json";
import "./Project.css";

const Project = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    if (el) {
      el.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="project-container" id="projects">
      <h2 className="project-title">Projects</h2>
      <div className="projects-scroll" ref={scrollRef}>
        {projects.map((project) => (
          <Card
            key={project.id}
            className="project-card"
            variant="borderless"
            hoverable
          >
            <div
              className="project-image"
              data-placeholder={!project.image ? "No Image" : ""}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              Tools:
              {(project.tools || project.languages)?.map((tool, index) => (
                <div key={index} className="tool-icon">
                  <img src={tool.icon} alt={tool.name} />
                </div>
              ))}
            </div>
            <div className="project-links">
              {project?.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              ) : (
                <span></span>
              )}
              {project?.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <span></span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
