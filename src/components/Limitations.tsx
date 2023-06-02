import React from "react";
import LargeScreens from "./Limitations/LargeScreens";
import SmallerScreens from "./Limitations/SmallerScreens";

const Limitations: React.FC = () => {
  return (
    // Parent container
    <div className="mb-24 md:mb-32">
      {/* Larger screens */}
      <LargeScreens />
      {/* Smaller Screens */}
      <SmallerScreens />
    </div>
  );
};

export default Limitations;
