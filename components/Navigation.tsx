"use client";

import Image from "next/image";
import { useState } from "react";

//react icons
import { FaBars } from "react-icons/fa6";


//Navigation
import NavigationSlider from "./navigation/NavigationSlider";
import Link from "next/link";
import HeaderBanner from "./ui/HeaderBanner";

const Navigation = () => {
  const [hideNavigation, setHideNavigation] = useState(true);

  return (
    <>
      <div>
       <HeaderBanner />
        <div className=" flex items-center justify-between px-4  max-width h-[60px]">
          <Image
            src="/icons/Logo.svg"
            width={100}
            height={100}
            alt="entapp tech logo"
            className=" w-auto h-[32px]"
          />

          <button
            onClick={() => setHideNavigation(false)}
            className=" md:hidden"
          >
            <FaBars size={20} />
          </button>
          <nav className=" hidden md:block">
            <ul className="flex text-[14px] font-medium  space-x-4">
              <li>
                <Link href="#about-us">ABOUT US</Link>
              </li>
              <li>
                <Link href="#company">COMPANY</Link>
              </li>
              <li>
                <Link href="#products">PRODUCTS</Link>
              </li>
              <li>
                <Link href="#contact">CONTACT</Link>
              </li>
              <li>
                <Link href="#blog">BLOG</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <NavigationSlider
        hideNavigation={hideNavigation}
        setHideNavigation={setHideNavigation}
      />
    </>
  );
};

export default Navigation;
