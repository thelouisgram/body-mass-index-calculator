import React from "react";
import style from "../style";

const Meaning: React.FC = () => {
  // Destructuring Style
  const { width, baseText } = style;

  return (
    // Parent Container
    <div className={` ${width} mb-20 mt-20 md:mt-0`}>
      {/* flex container */}
      <div className="flex flex-col ss:flex-row gap-10 md:gap-20 items-center md:justify-between h-auto relative ">
        {/* Image container */}
        <div className="ss:w-1/2 flex items-end  h-auto">
          {/* Image */}
          <img
            src="/images/image-man-eating.webp"
            className="w-full h-auto"
            alt='Man eating'
          />
        </div>
        {/* Text container */}
        <div className="ss:w-1/2 flex flex-col h-full md:items-end px-4 xs:px-6 ss:pl-0 ss:pr-6 md:px-0 mb-0 md:mb-5">
          {/* Curved line container */}
          <div className="w-full hidden md:flex justify-end pr-20 mb-5">
            <img src="/images/pattern-curved-line-left.svg" alt='Curved line' />
          </div>
          {/* Heading */}
          <h2 className="text-[36px] ss:text-[40px] md:text-[48px] text-blue font-[600] tracking-[-0.05em] leading-[1.1em] mb-5 md:w-[475px]">
            What your BMI result means
          </h2>
          {/* Paragraph */}
          <p className={` ${baseText} text-grey md:w-[475px]`}>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meaning;
