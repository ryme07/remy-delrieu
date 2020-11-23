import React from "react";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import "../Style/Project.scss";
import { useSpring, animated } from "react-spring";

export default function Project(props) {
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
        <div className="componentProject firstProject" key={index}>
          <div className="container-project">
            <div className="project">
              <Fade direction="left" delay={700} className="fade-title">
                <div className="title-project">
                  <h2>{project.title}</h2>
                </div>
              </Fade>
              <Fade direction="top" delay={1800} duration={2500}>
                <h5 className="subtitle">{project.subtitle}</h5>
              </Fade>
              <Fade direction="left" delay={1000} duration={1300}>
                <div className="block">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus, nulla ut commodo sagittis, sapien dui mattis
                    dui, non pulvinar lorem felis nec erat
                  </p>
                </div>
              </Fade>
              <Flip direction="vertical" delay={1800} duration={1000}>
                <ul className="techno">
                  <li>{project.framework}</li>
                  <li>{project.secondtechno}</li>
                  <li>{project.thirdtechno}</li>
                </ul>
              </Flip>
            </div>
            <div className="container-card">
              {/* <Flip direction="vertical" delay={1500} duration={1100}>
                <div className="index-project">{project.num}</div>
              </Flip> */}
              <Zoom
                direction="bottom"
                delay={1000}
                duration={2000}
                className="zoom-card"
              >
                <animated.div
                  className="card"
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: propsCard.xys.interpolate(trans) }}
                >
                  <div className="contentCardBeware">
                    {project.cardRenderer}
                  </div>
                </animated.div>
              </Zoom>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
