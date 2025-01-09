import Image from "next/image";

const GetInTouch = () => {
  return (
    <section>
      <div className=" px-4 pb-20  font-montserrat">
        <div>
          <h3 className=" mt-2 text-[24px] uppercase leading-[45px] font-semibold">
           {`Let’s`} stay connected
          </h3>
          <p className=" font-inter text-[14px] text-divider-300 pb-5">
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

        <div className=" bg-white mt-10">
          <span>Still have questions?</span>
          <h3>Get in touch</h3>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex">
                <select
                  id="country-code"
                  name="country-code"
                  className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a message..."
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full max-w-[150px] bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
