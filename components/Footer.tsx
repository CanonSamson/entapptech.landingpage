import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-primary text-white py-5 px-4">
      <Image
        src="/icons/Logo.svg"
        width={100}
        height={100}
        alt="entapp tech logo"
        className=" w-auto h-[32px]"
      />
      <div className=" text-[12px] text-center mt-5">
        <span>
          {" "}
          <span className=" text-secondary">ENTAPP</span> Copyright © 2025 All
          Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
