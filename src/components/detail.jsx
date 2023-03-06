import React from "react";

export default function Detail(props) {
  return (
    <div className="flex flex-col border font-serif   border-green-900 hover:border-green-400 bg-[#12250f] items-center justify-center rounded-2xl text-lg font-semibold  px-9 md:px-3  transition duration-500 ease-in-out transform hover:scale-110">
      <span>{props.title}</span>
      <span className="mb-3">({props.subtitle})</span>
      <span className="text-xl ">{props.price}</span>
    </div>
  );
}
