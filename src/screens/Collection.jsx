import React, { useState } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import Detail from "../components/detail";
import solanaIcon from "../assets/solanaIcon.png";

const CatogeryButton = ({ title, children, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="border-l  p-3 flex flex-row justify-between  w-56   border-slate-700 hover:bg-slate-700"
    >
      <span>{title}</span>
      {children}
      <BiFilterAlt size={20} />
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
        <span className="md:hidden">listings</span>
        <span>{props.listings}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">floor price</span>
        <span className="flex flex-row gap-1 items-center">
          {props.floorPrice}
          <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Vault Floor</span>
        <span className="flex flex-row gap-1 items-center">
          {props.vaultFloor}
          <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Vault Listning</span>
        <span className="flex flex-row gap-1 items-center">
          {props.vaultListnings}{" "}
          <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">TRL</span>
        <span className="flex flex-row gap-1 items-center">
          {props.trl} <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">TRR</span>
        <span className="flex flex-row gap-1 items-center">
          {props.trr} <img src={solanaIcon} className="h-4 w-4 bg-cover" />
        </span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Supply</span>
        <span>{props.supply}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Owners</span>
        <span>{props.owners}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Royalty</span>
        <span>{props.royalty}</span>
      </div>
      <div className="flex items-center  justify-between md:justify-center  w-full md:w-56 py-2 px-3">
        <span className="md:hidden">Last Date</span>
        <span>{props.date}</span>
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
        <Detail title="Total Royal Locked" subtitle="TTL" price="789 SOL" />
        <Detail title="Total Royal Locked" subtitle="TTL" price="540 SOL" />
      </div>
      <div className="bg-zinc-900 mt-14 rounded-xl border border-slate-600 font-bold ">
        <div className="md:flex md:flex-row md:justify-between  hidden">
          <button
            className="w-96 flex flex-row justify-between  p-3 hover:bg-slate-700"
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
            title={"floor price"}
            onclick={() => handleSort("floorprice")}
          />

          <CatogeryButton
            title={"Vault Floor"}
            onclick={() => handleSort("VaultFloor")}
          />

          <CatogeryButton
            title={"Vault Listning"}
            onclick={() => handleSort("VaultListning")}
          />

          <CatogeryButton title={"TRL"} onclick={() => handleSort("TRL")} />

          <CatogeryButton title={"TRR"} onclick={() => handleSort("TRR")} />
          <CatogeryButton
            title={"Supply"}
            onclick={() => handleSort("Supply")}
          />
          <CatogeryButton
            title={"Owners"}
            onclick={() => handleSort("Owners")}
          />
          <CatogeryButton
            title={"Royalty"}
            onclick={() => handleSort("Royalty")}
          />
          <CatogeryButton
            title={"Last Sale"}
            onclick={() => handleSort("LastSale")}
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
          supply={item.supply}
          owners={item.owners}
          royalty={item.royalty}
          date={item.lastSale}
        />
      ))}
    </div>
  );
}
