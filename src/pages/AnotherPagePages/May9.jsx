import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { firstEncounter } from "../../assets/pageAssets/StroyLine";

function May9() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  const [typing, setTyping] = useState(false);

  const dummyText = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis cum natus a...",
    "Ducimus alias dolore, officiis repellat, qui atque doloremque earum iure eveniet...",
    "Similique enim debitis, quaerat sit, nemo asperiores cum tempore aliquam consectetur...",
  ];

  useEffect(() => {
    // Initialize Typed.js

    typedInstance.current = new Typed(typedRef.current, {
      strings: dummyText,
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
    });
    typedInstance.current.stop();
    // Cleanup on unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, [dummyText]);

  
  return (
    <div className="w-full bg-slate-400 h-full flex items-center justify-center border-4">
      <div className={`h-full w-full text-center px-6 flex flex-col items-center justify-between py-10 bg-[url(${firstEncounter.backImg})] bg-bottom bg-cover`}>
        <h2 className="text-4xl mb-3">9/May/2023</h2>
        <p ref={typedRef} className="text-lg h-full"></p>



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
        </div>
      </div>
    </div>
  );
}

export default May9;
