import { useState } from "react";
import { BiMenu, BiXCircle, BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(true);

  return (
    <nav className=" text-white px-2 sm:px-2 py-2.5 border-b border-b-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex flex-row gap-6 items-center">
          <h1 className="font-bold tracking-widest text-xl">ARTSWAP</h1>
          {/* <img src={logo} className="bg-cover h-16 w-36" /> */}
          <button className="rounded-full border border-gray-700 p-2 hover:bg-slate-700">
            <Link to="/">
              <BiHome size={20} />
            </Link>
          </button>
        </div>
        <div className="flex md:order-2 md:hidden">
          <button type="button" onClick={() => setActive(!active)}>
            {active ? <BiMenu size={30} /> : <BiXCircle size={30} />}
          </button>
        </div>
        <div
          className={`${
            active ? `hidden` : ``
          }   justify-between items-center w-full  md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col mt-16 md:flex-row md:space-x-8 md:mt-0  text-2xl space-y-5 md:space-y-0  md:text-lg tracking-widest  items-center h-screen md:h-full">
            <li className="py-2 md:py-0">
              <a
                href="#x"
                className="py-4 pr-6 ml-5  pl-0 hover:opacity-80 transition-all text-green-500 md:text-white"
              >
                <Link to="/collections">Collections</Link>
              </a>
            </li>
            <li className="py-2 md:py-0">
              <button className="border border-green-500 text-lg rounded-3xl py-2 px-4  text-green-500 hover:bg-slate-700">
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
