import React from "react";

function TestBox({ className = "", title, para }) {
  return (
    <div
      className={`${className}  h-[200px] w-[300px] backdrop-blur-lg bg-slate-400  border-4 flex-shrink-0 drop-shadow-2xl shadow-2xl p-2`}
    >
      <div className="h-full w-full">
        <h2 className="text-2xl ">{!title ? "Title Here" : title}</h2>
        <p className="text-base ">{!para ? "Paragraph Here" : para}</p>
      </div>
    </div>
  );
}

export default TestBox;
