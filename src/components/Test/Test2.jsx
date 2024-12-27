import React, { useEffect, useRef } from "react";
import TestBox from "./TestBox";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Test2() {
  const testRef = useRef(null);
  const timelineRef = useRef(gsap.timeline({ paused: false }));

  useGSAP(() => {
    const tl = timelineRef.current;

    tl.clear();
    tl.fromTo(
      ".center-text-h2",
      { scale: 10 },
      { scale: 1, duration: 2, ease: "power2.out" }
    )
      .from("button", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
      .from(".bg-img", {
        y: "100%",
        duration: 2,
        ease: "bounce",
        onComplete: () => {
          tl.pause();
        },
      })
      .to(".center-text-h2, .btn-1", {
        y: "-100%",
        opacity: 0,
        delay: 2,
      })
      .from(".bg-img-2", {
        x: "100%",
        duration: 2,
        ease: "bounce",
      })
      .from(".box", {
        y: 1000,
        opacity: 0,
        duration: 3,
        stagger: 0.3,
      });
  },{scope:testRef.current,dependencies:[]});

  const handlePlay = () => {
    timelineRef.current.play();
  };

  return (
    <div ref={testRef} className="overflow-hidden h-screen w-full relative">
      {/* Background Images */}
      <img
        src="https://i.pinimg.com/1200x/6a/03/b3/6a03b380d3664f267343879afa01012c.jpg"
        className="object-cover object-center h-full w-full absolute -z-[50] bg-img"
        alt="background image"
      />
      <img
        src="https://i.pinimg.com/1200x/35/ac/52/35ac5246f3adcbfff0a3259154f7240b.jpg"
        className="object-cover object-center h-full w-full absolute -z-[50] bg-img-2"
        alt="background image 2"
      />

      {/* Main Content */}
      <div className="flex items-center justify-center h-full w-full flex-col">
        <h2 className="text-7xl center-text-h2 text-nowrap">Welcome Again</h2>
        <button
          onClick={handlePlay}
          className="z-[1000] btn-1 px-10 py-2 text-xl font-medium text-black border-2 mt-3 rounded-full bg-slate-400 drop-shadow-xl border-white"
        >
          Next
        </button>
      </div>

      {/* Boxes */}
      <div className="box-div absolute top-0 flex-col sm:flex-row flex-wrap gap-1 w-full z-[0] items-center justify-evenly h-full mt-5 flex">
        {[...Array(8)].map((_, i) => (
          <TestBox key={i} className="box" />
        ))}
      </div>
  
    </div>
  );
}

export default Test2;
