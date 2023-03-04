import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
export default function NFTcard(props) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="flex flex-col  bg-zinc-900 rounded-lg hover:cursor-pointer border border-gray-900 hover:border-green-500  ">
      <div>
        <div className="absolute flex flex-row justify-between w-40 md:w-52   p-1  items-center">
          <div className="flex flex-row items-center   bg-black p-1 rounded-md  ">
            <BsFillPeopleFill size={15} />
            <span className="text-xs">{props.people}</span>
          </div>
          <BiAddToQueue size={15} className="md:mr-6" />
        </div>
        <span
          className={`text-xl  my-28 mx-10 absolute ${
            show ? "visible" : "invisible"
          } `}
        >
          Click here
        </span>
      </div>
      <img
        className=" h-44 w-40 md:h-52  md:w-52 rounded-lg hover:opacity-20"
        src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeiapdyigcx7g2j3t4d2pfplln25npmtavvjhpsveosiiuktdexyvfe/161.png"
        alt="nft_image"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      <div className="flex flex-row justify-around items-center text-sm gap-3 py-4 font-mono">
        <h2 className="font-bold ">{props.name}</h2>
        <span className="text-green-500 tracking-tighter">{props.price}</span>
      </div>
    </div>
  );
}
