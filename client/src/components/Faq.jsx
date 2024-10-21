import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const FaqCard = ({ question }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      className={`
				"bg-white p-5 md:p-7 bg-white rounded-lg max-w-3xl w-full mx-auto cursor-pointer select-none overflow-hidden transition-all duration-500",
				${showDetails ? "h-fit" : "h-16 md:h-20"}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[#131B4D] font-semibold md:text-lg">{question}</h2>
        <span
          className={`
						"p-[2px] bg-[#637381] text-white  rounded transition-all",
						${showDetails ? "rotate-180" : "rotate-0"}`}
        >
          <IoIosArrowUp />
        </span>
      </div>
      <div>
        <p className="text-[.9rem] text-black/70/80 mt-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything.
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28 my-10 md:my-16 relative bg-[#F5F8FF]">
      <div>
        <div className="container mx-auto px-5 md:px-10 z-10">
          <div className="text-center flex flex-col gap-3">
            <h3 className="font-medium text-indigo-600">FAQ</h3>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-sm md:text-base mx-auto text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="flex flex-col mt-10 md:mt-16 gap-5 md:gap-8">
            <FaqCard question="How can I get benifits from it?" />
            <FaqCard question="What is ICO Crypto?" />
            <FaqCard question="How can i get the Token?" />
            <FaqCard question="How can i purchase bitcoin?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
