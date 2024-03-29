import React from "react";
import style from '../../style'

const HeroText: React.FC = () => {
  // Destructuring Style
  const {baseText} = style

  return (
    // Parent Container
    <div className={` text-blue h-auto mt-10 md:w-1/2 md:mt-16 flex flex-col items-center text-center md:items-start md:text-left `}>
      {/* Heading */}
      <h1 className="font-bold text-[32px] xs:text-[48px] ss:text-[56px] leading-[1.1em] mb-6 md:mb-10 ">
        Body Mass <br /> Index Calculator
      </h1>
      {/* Paragraph */}
      <p className={`${baseText} md:w-[450px] text-grey`}>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </div>
  ) 
};

export default HeroText;
