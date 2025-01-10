"use client";

import Image from "next/image";
import { useState } from "react";

//react icons
import { FaBars } from "react-icons/fa6";
import NavigationSlider from "./navigation/NavigationSlider";

const Navigation = () => {
  const [hideNavigation, setHideNavigation] = useState(true);

  return (
   <>
    <div>
      <div className=" flex items-center justify-between px-4  h-[60px]">
        <Image
          src="/icons/Logo.svg"
          width={100}
          height={100}
          alt="entapp tech logo"
          className=" w-auto h-[32px]"
        />

        <button onClick={() => setHideNavigation(!hideNavigation)}>
          <FaBars size={20} />
        </button>
      </div>

    </div>

    <NavigationSlider hideNavigation={hideNavigation} setHideNavigation={setHideNavigation} />
    
    </>
  );
};

export default Navigation;
