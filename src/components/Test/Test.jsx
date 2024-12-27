import React, { useRef } from "react";
import TestBox from "./TestBox";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Test() {
  const testRef = useRef(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();

  //     tl.from(".box", {
  //       y: "99vh",
  //       delay: 1,
  //       duration: 3,
  //       stagger: 0.6,
  //       yoyo: true,
  //       repeat: -1,
  //       ease: "elastic.inOut(1.2, 0.9)",
  //       // ease:'back.inOut(2.7)'
  //     });
  //   },
  //   { scope: testRef.current }
  // );

  return (
    <div ref={testRef} className="overflow-hidden h-screen  relative">
      <div className="absolute flex-col sm:flex-row flex-wrap gap-1 w-full z-50 flex items-center  justify-evenly h-full mt-5">
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
        <TestBox className={"box"} />
      </div>

      <>
        <img
          src="https://i.pinimg.com/1200x/6a/03/b3/6a03b380d3664f267343879afa01012c.jpg"
          className="object-cover object-center h-full w-full absolute -z-10"
          alt="background image"
        />
      </>
    </div>
  );
}

export default Test;
