import { LuPhone } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaSlack } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const HeaderBanner = () => {
  return (
    <div className=" text-white  px-4  bg-primary hidden md:flex items-center text-[14px] font-montserrat">
      <div className=" text-white  px-4 items-center hidden md:flex justify-between max-width ">
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-2">
            <TbClockHour4 size={16} className=" text-secondary" />
            <span>Mon - Sat 9:00 - 18:00</span>
          </div>
          <div className=" flex items-center gap-2">
            <LuPhone size={16} className=" text-secondary" />
            <span>(+44) 84783 48293</span>
          </div>
        </div>
        <div className=" flex  items-center gap-10">
          <div className=" flex items-center gap-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://slack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSlack size={16} />
            </a>
          </div>
          <button className=" uppercase bg-secondary h-ful py-3 px-5">
            Fix an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
