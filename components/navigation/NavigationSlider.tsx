import { menuItems } from "@/utils/data/menuItems";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavigationSlider = ({
  hideNavigation,
  setHideNavigation,
}: {
  hideNavigation: boolean;
  setHideNavigation: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <button
        className={`${
          hideNavigation ? " hidden" : "flex"
        }  bg-black/10 z-20 fixed top-0  h-screen w-full right-0`}
        onClick={() => setHideNavigation(true)}
      />

      <div
        className={` md:hidden w-[80%] fixed top-0  h-screen bg-white z-30  transform transition-all duration-500  ${
          hideNavigation ? " right-[-1000%]" : "right-0"
        }`}
      >
        <div className=" flex items-center justify-between px-4  h-[60px]">
          <Image
            src="/icons/Logo.svg"
            width={100}
            height={100}
            alt="entapp tech logo"
            className=" w-auto h-[32px]"
          />

          <button onClick={() => setHideNavigation(true)} className="  py-1">
            <IoClose size={24} />
          </button>
        </div>

        <div className=" mt-5">
          <div className=" px-4 mx-auto bg-white">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-divider-100  py-4 last:border-none"
              >
                <Link href={item.href}>
                  <div className="flex justify-between items-center py-4 px-6 hover:bg-gray-100">
                    <span className="text-[14px]  uppercase font-medium text-[#081127]">
                      {item.name}
                    </span>

                    <IoIosArrowForward size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-4 mt-14">
          <button className="uppercase  w-full px-4 bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationSlider;
