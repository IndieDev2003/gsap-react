import React from "react";

function HeroText({ text, className = "" }) {
  const dummyText =
    " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sit fuga, consequuntur eaque rerum quaerat facere. Odio laborum illum ad! local ";

  return (
    <div
      className={`h-40 w-60 bg-white text-black p-2 py-4 border rounded-lg absolute ${className}`}
    >
      <div>
        <p>{!text ? dummyText : text}</p>
      </div>
    </div>
  );
}

export default HeroText;
