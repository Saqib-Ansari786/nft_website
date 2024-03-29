import React, { useState } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import Detail from "../components/detail";
import solanaIcon from "../assets/solanaIcon.png";
import { BsArrowDownUp } from "react-icons/bs";

const CatogeryButton = ({ title, children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="border-l  p-3 flex flex-row justify-between items-center   w-60   border-slate-700 hover:bg-slate-700"
    >
      <span>{title}</span>
      {children}
    </button>
  );
};

const DetailCollection = (props) => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 rounded-2xl border  md:flex-row  justify-between cursor-pointer bg-zinc-900 border-t border-slate-700 hover:bg-slate-800 text-slate-300 font-bold">
      <div className="py-2 px-3 flex flex-row items-center gap-3 w-96 ">
        <img
          src="https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          className="bg-contain h-12 w-12  rounded-2xl"
        />
        <span className="">{props.name}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center w-full md:w-56  py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          listings
        </span>
        <span>{props.listings}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          floor price <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
        <span className="flex flex-row gap-1 items-center">
          {props.floorPrice}
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          Vault Floor <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
        <span className="flex flex-row gap-1 items-center">
          {props.vaultFloor}
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          Vault listing <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
        <span className="flex flex-row gap-1 items-center">
          {props.vaultListnings}
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          TRL <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
        <span className="flex flex-row gap-1 items-center">{props.trl}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          TRR <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
        <span className="flex flex-row gap-1 items-center">{props.trr}</span>
      </div>

      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden flex flex-row gap-1 items-center">
          Royalty
        </span>
        <span>{props.royalty}%</span>
      </div>
    </div>
  );
};

export default function Collection() {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const handleSort = (field) => {
    if (field === sortField) {
      // if the same field is clicked again, toggle the sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // otherwise, sort by the new field in ascending order
      setSortField(field);
      setSortDirection("asc");
    }
  };
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "Sam's Collection",
      listings: 25,
      floorPrice: 0.5,
      vaultFloor: 1.2,
      vaultListings: 50,
      TRL: 0.75,
      TRR: 1.5,
      supply: 1000,
      owners: 500,
      royalty: 0.05,
      lastSale: "5m", // 5 days ago
    },
    {
      id: 2,
      name: "John's Collection",
      listings: 10,
      floorPrice: 1.0,
      vaultFloor: 2.0,
      vaultListings: 20,
      TRL: 1.25,
      TRR: 2.5,
      supply: 400,
      owners: 250,
      royalty: 0.1,
      lastSale: "1d", // 1 day ago
    },
    {
      id: 3,
      name: "Jane's Collection",
      listings: 15,
      floorPrice: 0.75,
      vaultFloor: 1.5,
      vaultListings: 30,
      TRL: 1.0,
      TRR: 2.0,
      supply: 750,
      owners: 375,
      royalty: 0.075,
      lastSale: "10d", // 10 days ago
    },
  ]); // array of collections

  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCollections = sortField
    ? filteredCollections.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === "string") {
          // if comparing strings, ignore case
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }
        if (valA < valB) return sortDirection === "asc" ? -1 : 1;
        if (valA > valB) return sortDirection === "asc" ? 1 : -1;
        return 0;
      })
    : filteredCollections;

  return (
    <div className="text-white flex mt-12 flex-col p-10 ">
      <div className="flex  flex-col md:flex-row justify-around gap-9">
        <div className="flex flex-col gap-10 items-center md:items-start  ">
          <h1 className="text-white text-6xl tracking-normal  ">collections</h1>

          <div className="bg-zinc-900 rounded-2xl w-96 border border-gray-700 py-2 px-4 flex flex-row items-center text-gray-400  ">
            <BiSearch size={15} />
            <input
              placeholder="Search Collections"
              className="ml-3 bg-transparent w-full outline-none "
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Detail title="Total Royalties Locked" subtitle="TRL" price="789 SOL" />
        <Detail
          title="Total Royalties Released"
          subtitle="TRR"
          price="540 SOL"
        />
      </div>
      <div className="bg-zinc-900 mt-14 rounded-xl border border-slate-600 font-bold ">
        <div className="md:flex md:flex-row md:justify-between  hidden">
          <button
            className="w-96 flex flex-row justify-between items-center  p-3 hover:bg-slate-700"
            onclick={() => handleSort("name")}
          >
            <span className="ml-2">name</span>
            <BiFilterAlt size={20} />
          </button>
          <CatogeryButton
            title={"listings"}
            onclick={() => handleSort("listings")}
          />
          <CatogeryButton
            title={"Floor price"}
            onclick={() => handleSort("floorprice")}
          >
            <img src={solanaIcon} className="h-4 w-4 bg-cover mr-2" />
            <BsArrowDownUp size={15} />
          </CatogeryButton>
          <CatogeryButton
            title={"Vault Floor"}
            onclick={() => handleSort("VaultFloor")}
          >
            <img src={solanaIcon} className="h-4 w-4 bg-cover mr-2" />
            <BsArrowDownUp size={15} />
          </CatogeryButton>
          <CatogeryButton
            title={"Vault listing"}
            onclick={() => handleSort("VaultListning")}
          >
            <img src={solanaIcon} className="h-4 w-4 bg-cover mr-2" />
            <BsArrowDownUp size={15} />
          </CatogeryButton>
          <CatogeryButton title={"TRL"} onclick={() => handleSort("TRL")}>
            <img src={solanaIcon} className="h-4 w-4 bg-cover" />
            <BsArrowDownUp size={15} />
          </CatogeryButton>

          <CatogeryButton title={"TRR"} onclick={() => handleSort("TRR")}>
            <img src={solanaIcon} className="h-4 w-4 bg-cover" />
            <BsArrowDownUp size={15} />
          </CatogeryButton>
          <CatogeryButton
            title={"Royalty"}
            onclick={() => handleSort("Royalty")}
          />
        </div>
      </div>
      {filteredCollections.map((item) => (
        <DetailCollection
          name={item.name}
          listings={item.listings}
          floorPrice={item.floorPrice}
          vaultFloor={item.vaultFloor}
          vaultListnings={item.vaultListings}
          trl={item.TRL}
          trr={item.TRR}
          royalty={item.royalty}
        />
      ))}
    </div>
  );
}
