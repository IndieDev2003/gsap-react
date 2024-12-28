import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { secondEncounter } from "../../assets/pageAssets/StroyLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function July7() {
  const pageRef = useRef(null);

  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      const tl = gsap.timeline();
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
      tl.from(".typing-para", {
        opacity: 0,
        duration: 2,
        onComplete:()=>typedInstance.current.start()
      });
      // tl.from('button', {
      //   y: -30,
      //   opacity: 0,
      //   stagger:0.6
      // })
    },
    { scope: pageRef.current }
  );


  const buttonAnim = contextSafe(() => {
    gsap.from('button', {
      y: -30,
      opacity: 0,
      stagger:0.6
    })
  })

  useEffect(() => {
    // Initialize Typed.js
    typedInstance.current = new Typed(typedRef.current, {
      strings: secondEncounter.para,
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      // onComplete:buttonAnim
      // showCursor: false,
    });
    typedInstance.current.stop();

    console.log(secondEncounter.backImg);
    // Cleanup on unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);

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
        <p
          ref={typedRef}
          className="typing-para text-start text-lg h-full px-2 backdrop-blur-sm py-2 border rounded-lg text-white w-full"
        ></p>

        <div className="mt-4 flex gap-4">
          <button
            className="border-2 px-10 drop-shadow-lg shadow-xl bg-gray-100  py-2 rounded-full"
            onClick={() => typedInstance.current.start()}
          >
            Start
          </button>
          <button
            className="border-2 px-10 drop-shadow-lg shadow-xl bg-gray-100  py-2 rounded-full"
            onClick={() => typedInstance.current.stop()}
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
