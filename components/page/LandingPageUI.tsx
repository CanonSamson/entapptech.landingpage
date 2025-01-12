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
        <header className=" md:w-full bg-[#151D3A]/60">
          <div className="py-24 md:py-40 px-4 max-width">
            <div className=" text-white text-center md:text-start">
              <h1 className="  font-semibold md:hidden text-5xl md:text-[64px] md:leading-[80px]  uppercase">
                Business, Simplifying Complexity.
              </h1>
              <h1 className=" hidden  font-semibold md:block text-5xl md:text-[64px] md:leading-[80px]  uppercase">
                Innovating Business, Simplifying Complexity.
              </h1>
              <p className="  mt-5 text-[24px] font-openSans">
                Transforming businesses through tailored software solutions.
              </p>
            </div>
            <div className=" md:flex-row w-full uppercase flex flex-col gap-[30px] mt-[64px]">
              <Link href={"#"}>
                <button className="uppercase md:px-5 w-full bg-secondary h-[50px] text-[14px] font-semibold text-white rounded-[5px]">
                  learn more{" "}
                </button>
              </Link>
              <Link href={"#"}>
                <button className=" border-2 md:px-5  border-white font-semibold h-[50px] text-[14px] text-white  uppercase w-full rounded-[5px]">
                  contact us
                </button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      <AboutUs />

      <section className="  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover mt-10 md:mt-20 py-20   bg-[#0047AB]/95">
          <div className=" flex flex-col md:flex-row  max-width md:px-[10%] items-center space-y-8 md:space-y-0  md:space-x-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-foreground py-10 md:py-20">
        <div className="  max-width ">
          <div className=" text-center px-4 ">
            <SectionTitle title="What We Do" />
            <h2 className=" mt-2 main-header">Solutions That Drive Success</h2>
            <p className=" main-h5  text-divider-300  font-inter">
              We specialize in workflow automation, data management systems,
              cloud platforms, and mobile apps. Our solutions simplify
              complexity and empower your business to thrive in a competitive
              landscape.
            </p>
          </div>

          <div className="hidden md:grid px-4 grid-cols-1 mt-[64px]  md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <ServiceSection />
        </div>
      </section>

      <section className=" bg-white pt-10 md:pt-20 ">
        <div className="  max-width ">
          <div className=" text-center px-4 ">
            <SectionTitle title="WHY CHOOSE US?" />
            <h2 className=" mt-2 main-header">
              Why We’re Your Perfect Partner
            </h2>
            <p className="main-h5 text-divider-300  font-inter">
              Our dedication to innovation, personalized solutions, and agile
              development sets us apart. We deliver transformative results
              tailored to your business needs, ensuring seamless success and
              growth.
            </p>
          </div>
        </div>

        <div className="grid  max-width  px-4 grid-cols-1 mt-[64px] pb-10 md:pb-20 md:grid-cols-3  gap-5">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section>
        <div className=" bg-primary relative md:flex md:flex-row-reverse text-white">
          <Image
            src="/images/a-man.png"
            className=" object-cover md:hidden object-top w-full h-[350px] "
            width={400}
            height={400}
            alt=""
          />
          <Image
            src="/images/Frame-image.png"
            className=" object-cover  object-right-top hidden md:flex  w-full h-[589px] "
            width={400}
            height={400}
            alt=""
          />

          <div className="  md:absolute md:left-0 h-full flex-col flex items-start md:px-20 justify-center  md:w-[60%] bg-primary">
            <div className=" px-4 py-10 md:py-auto pb-14">
              <h2 className=" mt-2 text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold">
                Trusted for Cutting-Edge ICT Solutions
              </h2>
              <p className="text-[14px] mt-2 leading-[32px] md:text-[18px] md:leading-[32px] font-inter">
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
        </div>
      </section>

      <section className=" bg-foreground py-10 md:py-20 ">
        <div className=" max-width ">
          <div className=" text-center px-4 ">
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
          </div>

          <div className="grid px-4 grid-cols-2  mt-[64px] md:grid-cols-2  gap-5 md:gap-10">
            {solutionData.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="  text-white bg-stats-mbg  sm:bg-stats-bg ">
        <div className="  bg-cover  py-20  bg-[#0047AB]/95 md:bg-[#0047AB]/60">
          <div className=" max-width  px-4 flex flex-col items-center  text-center">
            <h2 className=" mt-2 text-[24px] md:text-[32px] md:leading-[64px] uppercase leading-[45px] font-semibold">
              Empowering Businesses with Custom Software Solutions for Success
            </h2>
            <button className=" max-w-[200px]  bg-secondary w-full   mx-auto px-10 mt-[32px] h-[50px] rounded-[5px] text-white  font-semibold">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-white py-10  md:py-20">
        <div className=" max-width">
          <div className=" text-center px-4 ">
            <SectionTitle title="WHO WE ARE" />
            <h2 className=" mt-2 main-header">
              Meet the Team Behind the Innovation
            </h2>
            <p className="main-h5  text-divider-300  font-inter">
              At the heart of Enterprise Application Tech LLC is a dedicated
              team of experts committed to crafting innovative solutions. With
              diverse skills and a shared vision, we collaborate to transform
              complex challenges into impactful software solutions that drive
              growth and success.
            </p>
          </div>

          <div className="grid px-4 grid-cols-1 md:grid-cols-4 mt-[64px]    gap-5">
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
