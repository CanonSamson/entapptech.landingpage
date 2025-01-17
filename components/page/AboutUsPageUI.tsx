"use client";

import { statsData } from "@/utils/data/statsData";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { solutionData } from "@/utils/data/solutionData";
import SolutionCard from "../ui/SolutionCard";
import Image from "next/image";
import GetInTouchButton from "../button/GetInTouchButton";
import { motion } from "framer-motion";
import { item, parentItem } from "@/utils/motion";
import PageHeroSection from "../ui/PageHeroSection";
import { BsArrowRight } from "react-icons/bs";

const AboutUsPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <PageHeroSection title="ABOUT US" />

      <section className=" relative  pt-10 md:pt-20 z-20 pb-10 md:pb-20  bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
          className=" max-width"
        >
          <motion.div
            variants={item}
            className=" flex flex-col md:grid md:grid-cols-2 md:gap-10 gap-4 mt-10 px-4"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/images/vision-1.png"
              className=" w-full h-[223px] md:h-full object-cover"
            />
            <div className="">
              <h2 className=" hidden md:flex mt-2 text-[32px]  uppercase leading-[64px] font-semibold">
                <h2 className=" mt-2 md:hidden text-[24px] uppercase leading-[45px] font-semibold">
                  Discover Our Passion for Innovation
                </h2>
              </h2>
              <p className="  text-[14px] md:text-[18px] text-center md:mt-4 md:text-start text-divider-300 font-openSans">
                At EntApp, we are dedicated to transforming businesses through
                innovative, custom software solutions. We specialize in
                simplifying the complexities of event management by providing
                seamless, user-friendly platforms for event hall bookings. Our
                mission is to streamline the event planning process and enhance
                customer experiences, helping businesses succeed with tailored
                solutions that fit their unique needs.
              </p>
              <div className=" mt-5 flex justify-end">
                <button className="  hover:font-semibold duration-500 transition-all  text-secondary items-center flex gap-4">
                  <span className=" italic">Learn more about us</span>
                  <BsArrowRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        {...parentItem}
        className="relative z-20    text-white bg-stats-mbg  sm:bg-stats-bg "
      >
        <div className="  bg-cover  py-20   bg-[#0047AB]/95">
          <div className=" flex flex-col md:flex-row  max-width md:px-[10%] items-center space-y-8 md:space-y-0  md:space-x-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </motion.section>

      <section className="relative z-20   bg-foreground py-10 md:py-20 ">
        <motion.div {...parentItem} className=" max-width ">
          <motion.div variants={item} className=" text-center px-4 ">
            <SectionTitle title="Our Products" />
            <h2 className=" mt-2 main-header">
              Our Innovative Product Solutions
            </h2>
            <p className=" main-h5  text-divider-300  font-inter">
              Explore a range of tailored enterprise solutions designed to
              optimize workflows, manage data efficiently, and enhance
              productivity. From mobile applications to robust cloud platforms,
              our products drive modern businesses toward success.
            </p>
          </motion.div>

          <motion.div
            {...parentItem}
            className="grid px-4 grid-cols-2  mt-[64px] md:grid-cols-2  gap-5 md:gap-10"
          >
            {solutionData.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className=" relative z-20  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover  py-20  bg-[#0047AB]/95 md:bg-[#0047AB]/60">
          <motion.div
            {...parentItem}
            className=" max-width  px-4 flex flex-col items-center  text-center"
          >
            <motion.h2
              variants={item}
              className=" mt-2 text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold"
            >
              Empowering Businesses with Custom Software Solutions for Success
            </motion.h2>
            <GetInTouchButton />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPageUI;
