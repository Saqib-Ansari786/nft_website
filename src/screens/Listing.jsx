import React from "react";
import {
  BiFilterAlt,
  BiGrid,
  BiGridAlt,
  BiListUl,
  BiRefresh,
} from "react-icons/bi";
import Detail from "../components/detail";
import Table from "../components/nft-table";
import NFTcard from "../components/NFTcard";

export default function Listing() {
  return (
    <div className="mt-20 mx-10">
      <div className="flex md:flex-row flex-col gap-4 justify-around border border-zinc-800 rounded-lg px-8 py-20 ">
        <div className="flex flex-col justify-center items-center gap-2  ">
          <img
            className="w-44 h-44 rounded-full"
            src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeiapdyigcx7g2j3t4d2pfplln25npmtavvjhpsveosiiuktdexyvfe/10.png"
            alt="Rounded avatar"
          />
          <h1 className="font-serif font-bold">User name</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 ">
          <Detail title="Floor" subtitle="price" price="10$" />
          <Detail title="Vault Floor" subtitle="price" price="10$" />
          <Detail title="TRL" subtitle="price" price="10$" />
          <Detail title="TRR" subtitle="price" price="10$" />
          <Detail title="Listed" subtitle="price" price="10$" />
          <Detail title="Volume" subtitle="price" price="10$" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row justify-around items-center mt-10">
            <h1 className="text-2xl font-bold  font-serif tracking-widest">
              NFTs
            </h1>
            <div className="flex flex-row items-center gap-3  bg-gray-900 p-1 rounded-md cursor-pointer">
              <BiFilterAlt size={25} className="hover:text-slate-400" />
              <BiRefresh size={25} className="hover:text-slate-400" />
            </div>
            <div className="flex flex-row items-center gap-3  bg-gray-900 p-1 rounded-md hover:cursor-pointer">
              <BiGridAlt size={25} className="hover:text-slate-400" />
              <BiGrid size={25} className="hover:text-slate-400" />
              <BiListUl size={25} className="hover:text-slate-400" />
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4  gap-4 mt-10  flex-wrap justify-between ">
            {nft_array.map((item) => {
              return (
                <NFTcard
                  people="1.5k"
                  name="Currancy"
                  price="1.5to1M"
                  key={item}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

let nft_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const data = [
  {
    id: 1,
    time: "2m",
    itemName: "Item 1",
    price: "$10.00",
    seller: "Seller 1",
    buyer: "Buyer 1",
    sales: true,
    newlyListed: false,
    vaultHistory: false,
  },
  {
    id: 2,
    time: "1m",
    itemName: "Item 2",
    price: "$20.00",
    seller: "Seller 2",
    buyer: "Buyer 2",
    sales: true,
    newlyListed: true,
    vaultHistory: false,
  },
  {
    id: 3,
    time: "3m",
    itemName: "Item 3",
    price: "$30.00",
    seller: "Seller 3",
    buyer: "Buyer 3",
    sales: false,
    newlyListed: false,
    vaultHistory: true,
  },
  {
    id: 4,
    time: "1m",
    itemName: "Item 4",
    price: "$40.00",
    seller: "Seller 4",
    buyer: "Buyer 4",
    sales: true,
    newlyListed: false,
    vaultHistory: true,
  },
];
