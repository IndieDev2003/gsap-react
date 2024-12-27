import React from "react";

function Section2Item({ title, para,className='' }) {
  return (
      <div className={`${className} px-2 py-2 h-[200px] w-[90%] sm:w-[50%]  md:w-[30vw] border-4 border-white shadow-xl drop-shadow-xl bg-gray-200`}>
      <div className="flex flex-col justify-evenly h-full">
        <h2 className="text-3xl text-start font-medium">{!title ? "Hello" : title}</h2>
        <p className="text-lg">
          {!para
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum aut accusantium nulla dolor excepturi reiciendis tempore dolore, laboriosam rem eum."
            : para}
        </p>
      </div>
    </div>
  );
}

export default Section2Item;
