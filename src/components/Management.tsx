import React from "react";
import style from "../style";

const Management: React.FC = () => {
  // Destructuring style
  const { width } = style;

  return (
    // Parent container
    <div className="w-full mx-auto gradient-bg2 lg:w-[1300px] mb-20">
      {/* Flex container */}
      <div
        className={` ${width} py-16 flex flex-col md:flex-row px-8 md:px-0 justify-between gap-8 w-full`}
      >
        {/* Eating container */}
        <div className="flex flex-col ss:flex-row md:flex-col gap-6 md:gap-0 ss:items-center md:items-start text-blue h-auto">
          {/* Icon */}
          <img
            src="/images/icon-eating.svg"
            alt="food icon"
            className="mb-0 md:mb-8 w-[60px] "
          />
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h3 className="font-[600] text-[24px] mb-2 md:mb-6">
              Healthy eating
            </h3>
            {/* Paragraph */}
            <p className="text-grey">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        {/* Exercise container */}
        <div className="flex flex-col ss:flex-row md:flex-col gap-6 md:gap-0 ss:items-center md:items-start text-blue h-auto">
          {/* Icon */}
          <img
            src="/images/icon-exercise.svg"
            alt="exercise icon"
            className="mb-0 md:mb-8 w-[60px] "
          />
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h3 className="font-[600] text-[24px] mb-2 md:mb-6">
              Regular exercise
            </h3>
            {/* Paragraph */}
            <p className="text-grey">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="flex flex-col ss:flex-row md:flex-col gap-6 md:gap-0 ss:items-center md:items-start text-blue h-auto">
          {/* Icon */}
          <img
            src="/images/icon-sleep.svg"
            alt="sleep icon"
            className="mb-0 md:mb-8 w-[60px] "
          />
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h3 className="font-[600] text-[24px] mb-2 md:mb-6">
              Adequate sleep
            </h3>
            {/* Paragraph */}
            <p className="text-grey text-[16px]">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;