"use client";

import { countryCodes } from "@/utils/data/countryCodes";
import CustomInput from "../ui/CustomInput";
import { useState } from "react";
import { toast, Toaster } from "sonner";

const GetInTouchForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    countryCode: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let errorsMessage = "";

    if (!values.fullName.trim()) {
      errorsMessage += "Full Name is required. ";
    } else if (!values.email.trim()) {
      errorsMessage += "Email is required. ";
    } else if (!values.phoneNumber.trim()) {
      errorsMessage += "Phone Number is required. ";
    }

    if (errorsMessage) {
      toast.error(errorsMessage.trim());
      return;
    }

    console.log(values);
  };
  return (
    <form className="space-y-4 mt-5" method="POST" onSubmit={handleSubmit}>
      {/* Full Name */}
      <Toaster />
      <CustomInput
        type="text"
        id="full-name"
        name="full-name"
        label="Full Name"
        placeholder="Enter your full name"
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            fullName: e.target.value,
          }))
        }
      />

      {/* Email */}
      <CustomInput
        type="email"
        id="email"
        name="email"
        label="Email"
        placeholder="Enter your email"
        onChange={(e) =>
          setValues((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
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
            className="px-3 py-2 border-none rounded-l-md  outline-none   focus:ring-none  h-[44px] bg-transparent shadow-none  focus:outline-none focus:ring-none"
            defaultValue="+234"
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                countryCode: e.target.value,
              }))
            }
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
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
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
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
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
  );
};

export default GetInTouchForm;
