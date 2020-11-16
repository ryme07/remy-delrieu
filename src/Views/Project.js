import React from "react";
import { Fade, Flip, Zoom } from "react-awesome-reveal";
import "../Style/Project.scss";
import { useSpring, animated } from "react-spring";

export default function Project(propsproject) {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div {...propsproject} className="componentProject firstProject">
      <div className="project">
        <Fade direction="left" duration={1500}>
          <h2>{propsproject.title}</h2>
        </Fade>

        <Fade direction="top" delay={1500} duration={2500}>
          <h5 className="subtitle">{propsproject.subtitle}</h5>
        </Fade>
        <Fade direction="left" delay={700}>
          <div className="block">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
              pulvinar lorem felis nec erat
            </p>
          </div>
        </Fade>
        <Flip direction="vertical" delay={1600} duration={1000}>
          <ul className="techno">
            <li>{propsproject.framework}</li>
            <li>{propsproject.secondtechno}</li>
            <li>{propsproject.thirdtechno}</li>
          </ul>
        </Flip>
      </div>
      <Zoom direction="bottom" delay={1000} duration={2000}>
        <animated.div
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="contentCard">{propsproject.stars}</div>
          <div className="contentCardDsi"> {propsproject.dsi}</div>
          <div>{propsproject.hello}</div>
        </animated.div>
      </Zoom>
    </div>
  );
}
