"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

//react icons
import { FaBars } from "react-icons/fa6";

//Navigation
import NavigationSlider from "./navigation/NavigationSlider";
import Link from "next/link";
import HeaderBanner from "./ui/HeaderBanner";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/data/menuItems";

const item = {
  hidden: {
    y: -70,
    opacity: 0,
    transition: {
      when: "afterChildren",
      duration: 0.5,
      repeat: 0,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 0.5,
      repeat: 0,
    },
  },
};

const parentItem = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: item,
};

const Navigation = () => {
  const [hideNavigation, setHideNavigation] = useState(true);
  const [scroll, setScroll] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        {...parentItem}
        className="   z-40  fixed  top-0 w-full  bg-white    "
      >
        <HeaderBanner scroll={scroll} />
        <div className=" w-full flex items-center justify-between px-4  max-width h-[60px]">
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
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname.includes(item.href) ? "text-secondary" : ""
                    } duration-500 transition-all`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>

      <NavigationSlider
        hideNavigation={hideNavigation}
        setHideNavigation={setHideNavigation}
      />
    </>
  );
};

export default Navigation;
