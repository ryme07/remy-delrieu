import React from "react";
import "../Style/Project.scss";

export default function ProjectMobile(props) {
  return (
    <>
      {props.projects.map((project, index) => (
        <div className="componentProject" key={index}>
          <div className="container-project">
            <div className="project">
              <div className="title-project">
                <h2>{project.title}</h2>
              </div>

              <h3 className="subtitle">{project.subtitle}</h3>

              <div className="block">{project.description}</div>

              <ul className="techno">
                <li>{project.framework}</li>
                <li>{project.secondtechno}</li>
                <li>{project.thirdtechno}</li>
              </ul>
            </div>
            <div className="card">
              <div className="contentCard">
                <p>{project.imageProject}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
