import React from "react";
import LargeScreens from "./Limitations/LargeScreens";
import SmallerScreens from "./Limitations/SmallerScreens";

const Limitations: React.FC = () => {
  return (
    <div className="mb-32">
      {/* Larger screens */}
      <LargeScreens />
      {/* Smaller Screens */}
      <SmallerScreens />
    </div>
  );
};

export default Limitations;
