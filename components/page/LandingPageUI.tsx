import Link from "next/link";
import Navigation from "../Navigation";
import AboutUs from "../AboutUs";
import { statsData } from "@/utils/data/statsData";
import SectionTitle from "../ui/SectionTitle";
import StatCard from "../ui/StatCard";
import { servicesData } from "@/utils/data/servicesData";
import ServiceCard from "../ui/ServiceCard";
import FeatureCard from "../ui/FeatureCard";
import { featuresData } from "@/utils/data/featuresData";
import { solutionData } from "@/utils/data/solutionData";
import SolutionCard from "../ui/SolutionCard";
import { teamMembers } from "@/utils/data/teamMembers";
import TeamCard from "../ui/TeamCard";
import GetInTouch from "../GetInTouch";
import Footer from "../Footer";
import ServiceSection from "../ServiceSection";
import Image from "next/image";

const LandingPageUI = () => {
  return (
    <main className="  font-montserrat ">
      <Navigation />
      <section className=" bg-hero-bg  bg-cover">
        <header className=" bg-[#151D3A]/60">
          <div className="py-24 px-4">
            <div className=" text-white text-center">
              <h1 className="  font-semibold text-5xl  uppercase">
                Business, Simplifying Complexity.
              </h1>
              <p className="  mt-5">
                Transforming businesses through tailored software solutions.
              </p>
            </div>
            <div className=" w-full uppercase flex flex-col gap-[30px] mt-[64px]">
              <Link href={"#"}>
                <button className="uppercase w-full bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
                  learn more{" "}
                </button>
              </Link>
              <Link href={"#"}>
                <button className=" border-2 border-white font-semibold h-[50px] text-[14px] text-white  uppercase w-full rounded-[5px]">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      <AboutUs />

      <section className="  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover mt-10 py-20   bg-[#0047AB]/95">
          <div className=" flex flex-col items-center space-y-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-foreground pt-10 ">
        <div>
          <div className=" text-center px-4 ">
            <SectionTitle title="What We Do" />
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Solutions That Drive Success
            </h2>
            <p className="text-[14px] text-divider-300  font-inter">
              We specialize in workflow automation, data management systems,
              cloud platforms, and mobile apps. Our solutions simplify
              complexity and empower your business to thrive in a competitive
              landscape.
            </p>
          </div>

          <div className="hidden md:grid px-4 grid-cols-1 mt-[64px] pb-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <ServiceSection />
        </div>
      </section>

      <section className=" bg-white pt-10 ">
        <div>
          <div className=" text-center px-4 ">
            <SectionTitle title="WHY CHOOSE US?" />
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Why We’re Your Perfect Partner
            </h2>
            <p className="text-[14px] text-divider-300  font-inter">
              Our dedication to innovation, personalized solutions, and agile
              development sets us apart. We deliver transformative results
              tailored to your business needs, ensuring seamless success and
              growth.
            </p>
          </div>
        </div>

        <div className="grid px-4 grid-cols-1 mt-[64px] pb-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section>
        <div className=" bg-primary text-white">
          <Image
            src="/images/a-man.png"
            className=" object-cover object-top w-full h-[350px]"
            width={400}
            height={400}
            alt=""
          />
          <div className=" px-4 py-10 pb-14">
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Trusted for Cutting-Edge ICT Solutions
            </h2>
            <p className="text-[14px] mt-2 leading-[32px] font-inter">
              From enterprise IT infrastructure to seamless event hall booking
              systems, our solutions are designed to drive innovation and
              efficiency. Empower your business with technology that works for
              you.
            </p>
          </div>
          <div className=" px-4 pb-14">
            <button className="uppercase  px-4 bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
              Discover Our ICT Solutions
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-foreground pt-10 pb-10 ">
        <div>
          <div className=" text-center px-4 ">
            <SectionTitle title="Our Products" />
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Our Innovative Product Solutions
            </h2>
            <p className="text-[14px] text-divider-300  font-inter">
              Explore a range of tailored enterprise solutions designed to
              optimize workflows, manage data efficiently, and enhance
              productivity. From mobile applications to robust cloud platforms,
              our products drive modern businesses toward success.
            </p>
          </div>

          <div className="grid px-4 grid-cols-2 mt-[64px] pb-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionData.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover  py-20  bg-[#0047AB]/95">
          <div className="  px-4 flex flex-col items-center  text-center">
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Empowering Businesses with Custom Software Solutions for Success
            </h2>
            <button className="  bg-secondary w-full max-w-[75%]  mx-auto px-10 mt-[32px] h-[50px] rounded-[5px] text-white  font-semibold">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-white pt-10 ">
        <div>
          <div className=" text-center px-4 ">
            <SectionTitle title="WHO WE ARE" />
            <h2 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
              Meet the Team Behind the Innovation
            </h2>
            <p className="text-[14px] text-divider-300  font-inter">
              At the heart of Enterprise Application Tech LLC is a dedicated
              team of experts committed to crafting innovative solutions. With
              diverse skills and a shared vision, we collaborate to transform
              complex challenges into impactful software solutions that drive
              growth and success.
            </p>
          </div>

          <div className="grid px-4 grid-cols-1 mt-[64px] pb-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((solution, index) => (
              <TeamCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
      <Footer />
    </main>
  );
};

export default LandingPageUI;
