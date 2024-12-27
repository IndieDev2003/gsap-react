import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  heroBottomBackText,
  heroPara,
  heroTitle,
  heroTopBackText,
} from "../../assets/pageAssets/Home";

function Hero() {
  const homeHeroRef = useRef(null);
  useGSAP(
    () => {
      const heroTL = gsap.timeline({
        onComplete: () => {
          textTL.play();
        },
      });
      const textTL = gsap.timeline({
        // repeat: -1,

        ease: "bounce.out",
      });
      //   textTL.pause();

      heroTL.from(".center-text", {
        zoom: 10,
        duration: 1.2,
      });
      heroTL.from(".center-para", {
        opacity: 0,
        y: -20,
        delay: 1,
      });
      textTL.fromTo(
        ".back-text-top",
        {
          x: "80vw",
          //    left: '-100vw'
        },
        {
          x: "-25vw",
          duration: 5,
          ease: "linear",
        }
      );
      textTL.fromTo(
        ".back-text-btm",
        {
          x: "-80vw",
          //    left: '-100vw'
        },
        {
          x: "25vw",
          duration: 5,
          ease: "linear",
        }
      );
    },
    { scope: homeHeroRef.current }
  );

  return (
    <div
      ref={homeHeroRef}
      className="h-screen w-screen flex justify-center items-center bg-slate-600 text-white home-hero  relative"
    >
      <div className="text-center px-4">
        <h2 className="text-7xl center-text sm:text-nowrap">
          {heroTitle ? heroTitle : "Text Sample"}
        </h2>
        <p className="w-full sm:max-w-[50vw] center-para">
          {!heroPara
            ? " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aut accusantium nulla dolor excepturi reiciendis tempore dolore, laboriosam rem eum"
            : heroPara}
        </p>
      </div>

      <>
        {/* Top Text */}
        <h2 className="home-hero-back-top-text back-text-top">
          {heroTopBackText}
        </h2>

        {/* Bottom Text */}
        <h2 className="home-hero-back-btm-text back-text-btm">
          {heroBottomBackText}
        </h2>
      </>
      <div className="absolute h-full w-full z-[100] bg-black opacity-25"></div>
    </div>
  );
}

export default Hero;
