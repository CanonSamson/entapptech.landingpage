"use client";

const GetInTouchButton = () => {
  return (
    <button
      className="uppercase hover:scale-95 duration-500 transition-all max-w-[200px] bg-secondary w-full
       mx-auto px-10 mt-[32px] h-[50px] rounded-[5px] text-white font-semibold"
      onClick={() => {
        const element = document.getElementById("get-in-touch");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      get in touch
    </button>
  );
};

export default GetInTouchButton;
