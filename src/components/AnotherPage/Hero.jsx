import React, { useRef, useState } from "react";
import { heroBgPanel } from "../../assets/pageAssets/AnotherPage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HeroText from "./HeroText";

function Hero() {
  const heroRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const { contextSafe } = useGSAP();

  // useGSAP(() => {
  //   gsap.from(".bg-panel", {
  //     y: "100%",
  //     stagger: 0.7,
  //   });
  // });

  const bgPanelSizeIncrease = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      width: "200px",
    });
  });
  const bgPanelSizeDecrease = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      width: "150px",
    });
  });

  const handleMouseEnter = (e, index) => {
    bgPanelSizeIncrease(e);
    setHoverIndex(index);
  };

  const handleMouseLeave = (e) => {
    bgPanelSizeDecrease(e);
    setHoverIndex(null);
  };

  return (
    <div ref={heroRef} className="h-full w-full overflow-hidden">
      <div className="h-full w-full flex">
        {heroBgPanel.map((panel, key) => (
          <div
            key={key}
            onMouseEnter={(e) => handleMouseEnter(e, key)}
            onMouseLeave={handleMouseLeave}
            className="h-full w-[150px]  bg-panel relative  flex items-center justify-center  text-white"
          >
            <img
              src={panel.imgUrl}
              alt={panel.alt}
              className="object-cover object-center w-full h-full absolute -z-10 bg-panel-img"
            />
            <h2 className="text-5xl rotate-90 text-nowrap bg-panel-text text-center">
              {panel.text}
            </h2>
            <HeroText text={panel.paraText} className={hoverIndex === key ? `${panel.className}  transition-all` : 'opacity-0'} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
