import { countryCodes } from "@/utils/data/countryCodes";
import Image from "next/image";
import CustomInput from "./ui/CustomInput";

const GetInTouch = () => {
  return (
    <section className="px-4 py-16 bg-[#F5F5F8]">
      <div className=" font-montserrat">
        <div>
          <h3 className="  text-[24px]  uppercase leading-[45px] font-semibold">
            {`Let’s`} stay connected
          </h3>
          <p className=" mt-2 font-inter leading-[24px] text-[14px] text-divider-300 pb-5">
            At the heart of Enterprise Application Tech LLC is a dedicated team
            of experts committed to crafting innovative solutions. With diverse
            skills and a shared vision, we collaborate to transform complex
            challenges into impactful software solutions that drive growth and
            success.
          </p>
          <Image
            src={"/images/contact.png"}
            className=" w-full h-auto"
            width={200}
            height={200}
            alt=""
          />
        </div>

        <div className=" p-6 py-10 bg-white mt-10">
          <div className=" uppercase">
            <span className=" text-[14px] text-divider-300 font-medium">
              Still have questions?
            </span>
            <h3 className=" text-[32px] font-semibold ">Get in touch</h3>
          </div>
          <form className="space-y-4 mt-5">
            {/* Full Name */}

            <CustomInput
              type="text"
              id="full-name"
              name="full-name"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />

            {/* Email */}
            <CustomInput
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              required
            />

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone-number"
                className="block  font-medium text-[#414651] text-[14px]  font-montserrat"
              >
                Phone Number
              </label>
              <div className="flex mt-1 border border-divider rounded-[5px] h-[44px] items-center">
                <select
                  id="country-code"
                  name="country-code"
                  className="px-3 py-2 border-none rounded-l-md   focus:ring-none  focus:outline-none focus:ring-none"
                  defaultValue="+234"
                >
                  {countryCodes.map((country, index) => (
                    <option
                      className=" bg-transparent"
                      key={index}
                      value={country.code}
                    >
                      {country.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="w-full px-4 py-2  text-[14px] rounded-[5px] h-[44px] bg-transparent rounded-r-md focus:outline-none focus:ring-none  outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block  font-medium text-[#414651] text-[14px] pb-1  font-montserrat"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border   text-[14px]  border-divivder mt-1 rounded-md focus:outline-none focus:ring-none"
                placeholder="Enter a message..."
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full max-w-[170px] h-[50px]  uppercase text-[14px] bg-yellow-500 text-white px-4 rounded-[5px] font-semibold hover:bg-yellow-600 focus:outline-none"
            >
              Message Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
