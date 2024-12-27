import React, { useEffect, useRef,useState } from "react";
import TestBox from "./TestBox";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Test() {
  const testRef = useRef(null);

  const [timeLine,setTimeline]= useState(false)

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

      tl.play()

      tl.fromTo(
        ".center-text-h2",
        {
          zoom: 10,
        },
        {
          zoom: 1,
          duration: 2,
          smoothOrigin: true,
        }
      );
      tl.from('button', {
        opacity: 0,
        y: -30,
        duration: 2,
   
      })
      tl.from(".bg-img", {
        opacity: 1,
        y: "100%",
        duration: 2,
        ease: "bounce",
        // onComplete: setTimeline(false)
        
      });


      if (timeLine) tl.play(); else tl.pause();
      tl.to(".center-text-h2, .btn-1", {
        y:'-100%',
        opacity: 0,
        delay: 3,
      });

      tl.from(".bg-img-2", {
        opacity: 1,
        x: "100%",
        duration: 2,
        ease: "bounce",
      });
      tl.from(".box", {
        y: 1000,
        opacity: 0,
        delay: 0,
        duration: 3,
        stagger: 0.3,
      });
    },
    {scope: testRef,dependencies:[timeLine]}
  );

  useEffect(() => { setTimeline(true)},[timeLine]);

  return (
    <div ref={testRef} className="overflow-hidden h-screen w-full  relative">
      {/* Background Image */}
      <>
        <img
          src="https://i.pinimg.com/1200x/6a/03/b3/6a03b380d3664f267343879afa01012c.jpg"
          className="object-cover object-center h-full w-full absolute -z-[50] bg-img"
          alt="background image"
        />
        <img
          src="https://i.pinimg.com/1200x/35/ac/52/35ac5246f3adcbfff0a3259154f7240b.jpg"
          className="object-cover object-center h-full w-full absolute -z-[50] bg-img-2"
          alt=""
        />
      </>
      <div className="flex items-center justify-center h-full w-full  flex-col">
        <h2 className="text-7xl center-text-h2 text-nowrap">Welcome Agian</h2>
        <button onClick={tl.play}  className="z-[1000] btn-1 px-10 py-2 text-xl font-medium text-black border-2 mt-3 rounded-full bg-slate-400 drop-shadow-xl border-white">Next</button>
      </div>

      <div className="box-div absolute top-0 flex-col sm:flex-row flex-wrap gap-1 w-full z-[0] items-center  justify-evenly h-full mt-5 flex">
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
      </div>
    </div>
  );
}

export default Test;
