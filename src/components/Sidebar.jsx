import React from "react";
import { BiAdjust, BiArch, BiAtom } from "react-icons/bi";

function Sidebar() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="relative ">
      <div
        className="fixed inset-y-0 left-0 w-40 mt-40 h-40 "
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <ul className="py-6 space-y-1 ">
          <li className="hover:bg-[#1f4b21] transition duration-500 ease-in-out transform  hover:scale-110">
            <a href="#" className="flex items-center px-3 py-2 text-gray-100 ">
              <BiAdjust size={20} className="mr-3" />
              <span className={`${show ? "visible " : "invisible"} `}>
                Dashboard
              </span>
            </a>
          </li>
          <li className="hover:bg-[#1f4b21] transition duration-500 ease-in-out transform  hover:scale-110">
            <a href="#" className="flex items-center px-3 py-2 text-gray-100">
              <BiArch size={20} className="mr-3" />
              <span className={`${show ? "visible" : "invisible"}`}>Posts</span>
            </a>
          </li>
          <li className="hover:bg-[#1f4b21] transition duration-500 ease-in-out transform  hover:scale-110">
            <a href="#" className="flex items-center px-3 py-2 text-gray-100">
              <BiAtom size={20} className={`mr-3 `} />
              <span className={`${show ? "visible" : "invisible"}`}>
                Settings
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
