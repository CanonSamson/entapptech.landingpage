import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";

const AboutUs = () => {
  return (
    <section>
      <div>
        <div className=" mt-10 text-center px-4 ">
          <SectionTitle title="About us" />
          <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
            Discover Our Passion for Innovation
          </h2>
          <p className="text-[14px] text-divider-300  font-inter">
            Transforming businesses with innovative, custom software solutions
            that simplify complexity and drive success.
          </p>
        </div>

        <div className=" flex flex-col gap-4 mt-10 px-4">
          <Image
            height={200}
            width={200}
            alt=""
            src="/images/vision-1.png"
            className=" w-full h-[223px] object-cover"
          />
          <div>
            <div className=" flex items-center gap-4">
              <span className=" text-[14px]   italic font-light uppercase ">vision</span>
              <div className=" flex-1  border-b border-divider-300" />
            </div>
            <h3 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Driving Tomorrow&apos;s Solutions, Today
            </h3>
            <p className="  text-[14px] text-divider-300 font-openSans">
              To revolutionize the business landscape through innovation and
              unparalleled software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
