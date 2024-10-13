"use client";

import { OpenSource, Product, Solutions } from "@/components/layout";

import { DirectionIcon } from "@/assets/icons";

import { useFloat } from "@/lib";
import D from '../../../assets/Images/D.gif'
import Image from "next/image";

const Navbar = () => {
  const { float: toggleNav, toggleFloat: setToggleNav } = useFloat(false);

  return (
    <nav className=" w-screen xl:px-80 md:px-8 sm:px-7 px-7 mx-auto animate-slideDown">
      <div className="text-white bg-transparent py-5">
        <button className="hidden" />
        <div className="flex items-center max-lg:justify-between max-lg:flex-row-reverse">
          <div className="flex justify-between items-center max-lg:w-full">
            <a href={'#'}>
              <Image src={D} alt="Profile Icon" width={50} height={50} />
            </a> 
            <button
              type="button"
              onClick={() => setToggleNav()}
              className="lg:hidden cursor-pointer"
            >
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150  bg-white ${
                  toggleNav
                    ? "rotate-45 mb-0  translate-y-[1px]"
                    : "rotate-0 mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                  toggleNav ? "hidden mb-0" : "mb-1"
                } `}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white  ${
                  toggleNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>
          <div
            className={` flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40  ${
              toggleNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : " max-lg:max-h-0 max-lg:scale-y-50 max-lg:-translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center lg:justify-between max-lg:justify-between max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px]  overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto  overflow-y-auto">
                  <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Carrer
                    </a>
                  </li>
                  <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a className="max-lg:font-semibold  flex items-center p-1 hover:text-neutral-300">
                      Education
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4">
                <a
                  href="#"
                  className="max-lg:hidden px-2 py-[5px] border-[1px] rounded-md hover:text-neutral-400 "
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
