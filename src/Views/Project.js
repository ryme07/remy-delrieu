import React, { useState, useEffect } from "react";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import "../Style/Project.scss";
import { useSpring, animated } from "react-spring";

export default function Project(props) {
  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => setLargeur(window.innerWidth);

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [propsCard, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <>
      {props.projects.map((project, index) => (
        <div className="componentProject" key={index}>
          <div className="container-project">
            {largeur > 768 ? (
              <div className="project">
                <Fade direction="left" delay={700} className="fade-title">
                  <div className="title-project">
                    <h2>{project.title}</h2>
                  </div>
                </Fade>
                <Fade direction="top" delay={1800} duration={2500}>
                  <h3 className="subtitle">{project.subtitle}</h3>
                </Fade>
                <Fade direction="left" delay={1000} duration={1300}>
                  <div className="block">{project.description}</div>
                </Fade>
                <Flip direction="vertical" delay={1800} duration={1000}>
                  <ul className="techno">
                    <li>{project.framework}</li>
                    <li>{project.secondtechno}</li>
                    <li>{project.thirdtechno}</li>
                  </ul>
                </Flip>
              </div>
            ) : (
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
            )}

            <div className="container-card">
              <Zoom
                direction="bottom"
                delay={1000}
                duration={2000}
                className="zoom-card"
              >
                <animated.div
                  className="card-animated"
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: propsCard.xys.interpolate(trans) }}
                >
                  {largeur > 992 ? (
                    <div className="contentCardBeware">
                      {project.cardRenderer}
                    </div>
                  ) : (
                    <div className="contentImage">
                      <img src={project.imageProject} alt="about-project" />
                    </div>
                  )}
                </animated.div>
              </Zoom>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
