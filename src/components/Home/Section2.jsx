import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  section2BackImg,
  section2Items,
  section2TopBackText,
} from "../../assets/pageAssets/Home";
import Section2Item from "./Section2Item";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function Section2() {
  const section2Ref = useRef();
  useGSAP(
    () => {
      const sectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: section2Ref.current,
          markers: true,
          start: "top 50%",
          end: "top top",
          scrub: 1,
        },
      });

      sectionTl.from(".back-text", {
        y: 200,
        opacity: 0,
        stagger: 0.8,
          // delay: 2,
        duration:4,
        yoyo: true,
      });

      sectionTl.from(".section-item", {
        y: 1000,
        duration: 4,
        stagger: 0.8,
        // pin: true,
      });
    },
    { scope: section2Ref.current }
  );

  return (
    <div
      ref={section2Ref}
      className="min-h-screen w-full relative bg-slate-300 overflow-hidden"
    >
      <div className=" absolute h-full w-full flex flex-col sm:flex-row justify-evenly items-center z-50">
        {section2Items.map((item, index) => (
          <Section2Item
            key={index}
            title={item.title}
            para={item.para}
            className="text-slate-800 section-item"
          />
        ))}
      </div>

      <>
        {/* <img
          src={section2BackImg}
          className=" absolute -z-10 w-full h-full object-cover"
          alt=""
        /> */}

        <h2 className="hidden md:block -z-1 absolute left-10 top-0 text-[220px] font-semibold back-text">
          {section2TopBackText}
        </h2>
        <h2 className="hidden md:block -z-1 absolute right-10 bottom-0 text-[220px] font-semibold back-text">
          {section2TopBackText}
        </h2>
      </>
    </div>
  );
}

export default Section2;
