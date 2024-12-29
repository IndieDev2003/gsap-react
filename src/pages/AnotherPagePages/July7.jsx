import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { secondEncounter } from "../../assets/pageAssets/StroyLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function July7() {
  const pageRef = useRef(null);
  const timelineRef = useRef(gsap.timeline({ paused: false }));

  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      const tl = timelineRef.current;
      tl.fromTo(
        ".center-title-text",
        {
          zoom: 2,
        },
        { zoom: 1, duration: 2 }
      );
      tl.from(".center-title-text", {
        y: "150px",
        duration: 3,
      });

      tl.from(".para-container", {
        opacity: 0,
        duration: 1.4,
        
      })
      tl.from(".typing-para", {
        y: 20,
        opacity: 0, x:10,
        // duration: 2,
        // ease: "elastic",
        stagger: 0.6,
      })

      tl.from("button", {
        y: -30,
       
        opacity: 0,
        stagger: 0.6,
      });
    },
    { scope: pageRef.current }
  );

  return (
    <div
      ref={pageRef}
      className="w-full h-full flex items-center justify-center border-4 relative"
    >
      <div
        className={` relative h-full w-full text-center px-6 flex flex-col items-center justify-between py-10 bg-[url('${secondEncounter.backImg}')] bg-bottom bg-cover`}
      >
        <h2 className="center-title-text text-5xl mb-3 text-white font-semibold">
          {secondEncounter.title}
        </h2>

        <div className="w-full border h-full p-3 backdrop-blur rounded-lg para-container">
          {
            secondEncounter.para.map((line, key) => (
              <p className="text-start w-full text-lg typing-para text-white"  key={key}>{line}</p>
            ))
          }
        </div>

        <div className="mt-4 flex gap-4">
          <button
            className="border-2 px-10 drop-shadow-lg shadow-xl bg-gray-100  py-2 rounded-full"
            onClick={() => timelineRef.current.play()}
          >
            Start
          </button>
          <button
            className="border-2 px-10 drop-shadow-lg shadow-xl bg-gray-100  py-2 rounded-full"
            onClick={() =>  timelineRef.current.pause()}
          >
            Stop
          </button>

          <img
            src={secondEncounter.backImg}
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default July7;
