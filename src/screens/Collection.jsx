import React from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import Detail from "../components/detail";

const CatogeryButton = ({ title }) => {
  return (
    <button className="border-l  p-3 flex flex-row justify-between w-56 h-full  border-slate-700 hover:bg-slate-700">
      <span>{title}</span>
      <BiFilterAlt size={20} />
    </button>
  );
};

const DetailCollection = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 rounded-2xl border  md:flex-row  justify-between cursor-pointer bg-zinc-900 border-t border-slate-700 hover:bg-slate-800 text-slate-300 font-bold">
      <div className="py-2 px-3 flex flex-row items-center gap-3 w-96 ">
        <img
          src="https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          className="bg-contain h-12 w-12  rounded-2xl"
        />
        <span className="">name</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center w-full md:w-56  py-2 px-3">
        <span className="md:hidden">listings</span>
        <span>10</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">floor price</span>
        <span>10</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">best offer</span>
        <span>10</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">offer TVL</span>
        <span>10</span>
      </div>
    </div>
  );
};

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
export default function Collection() {
  return (
    <div className="text-white flex mt-12 flex-col p-10 ">
      <div className="flex  flex-col md:flex-row justify-between gap-9">
        <div className="flex flex-col gap-10 items-center md:items-start  ">
          <h1 className="text-white text-6xl tracking-normal  ">collections</h1>

          <div className="bg-zinc-900 rounded-2xl w-96 border border-gray-700 py-2 px-4 flex flex-row items-center text-gray-400  ">
            <BiSearch size={15} />
            <input
              placeholder="Search Collections"
              className="ml-3 bg-transparent w-full outline-none "
            />
          </div>
        </div>
        <Detail title="Total Royal Locked" subtitle="TTL" price="789 SOL" />
        <Detail title="Total Royal Locked" subtitle="TTL" price="540 SOL" />
      </div>
      <div className="bg-zinc-900 mt-14 rounded-xl border border-slate-600 font-bold ">
        <div className="md:flex flex-row justify-between hidden   ">
          <button className="w-96 flex flex-row justify-between  p-3 hover:bg-slate-700">
            <span className="ml-2">name</span>
            <BiFilterAlt size={20} />
          </button>
          <CatogeryButton title={"listings"} />
          <CatogeryButton title={"floor price"} />
          <CatogeryButton title={"best offer"} />
          <CatogeryButton title={"offer TVL"} />
        </div>
      </div>
      {data.map((item) => (
        <DetailCollection />
      ))}
    </div>
  );
}
