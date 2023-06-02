import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setSystem } from "../../store/stateSlice";
import Metric from "./forms/Metric";
import Result from "./Result";
import Imperial from "./forms/Imperial";

const BmiCalculator: React.FC = () => {
  // Destructuring global state
  const { system } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  // Function to set system to metric
  const updateMetric = () => {
    dispatch(setSystem("metric"));
  };

  // Function to set system to imperial
  const updateImperial = () => {
    dispatch(setSystem("imperial"));
  };

  // Active Radio Button
  const activeRadio = (
    <div className="w-5 h-5 xs:w-7 xs:h-7 border-[1px] border-skyBlue flex items-center justify-center rounded-full">
      <div className="w-3 h-3 xs:w-4 xs:h-4 bg-skyBlue rounded-full" />
    </div>
  );

  // Inactive Radio Button
  const inactiveRadio = (
    <div className="w-5 h-5 xs:w-7 xs:h-7 border-[1px] border-grey flex items-center justify-center rounded-full" />
  );

  return (
    // Parent Container
    <div
      className={`ss:w-[525px] ss:mx-auto md:mx-0 h-auto bg-white rounded-[20px] hero-shadow text-blue`}
    >
      <div className="p-4 xs:p-6 ss:p-7">
        {/* Form Legend */}
        <h3 className="text-[20px] font-[700] mb-5">
          Enter your details below
        </h3>
        {/* Radio Container */}
        <div className="w-full flex gap-5 mb-5">
          {/* Metric Radio */}
          <div className="w-1/2">
            <div className="flex gap-3 items-center">
              <div className="cursor-pointer" onClick={updateMetric}>
                {system === "metric" ? activeRadio : inactiveRadio}
              </div>
              <h4 className="text-blue text-[16px] font-[600]">Metric</h4>
            </div>
          </div>
          {/* Imperial Radio */}
          <div className="w-1/2">
            <div className="flex gap-3 items-center">
              <div className="cursor-pointer" onClick={updateImperial}>
                {system === "imperial" ? activeRadio : inactiveRadio}
              </div>
              <h4 className="text-blue text-[16px] font-[600]">Imperial</h4>
            </div>
          </div>
        </div>
        {/* Form Container */}
        <div className="mb-5">
          {system === "metric" ? <Metric /> : <Imperial />}
        </div>
        {/* Result */}
        <Result />
      </div>
    </div>
  );
};

export default BmiCalculator;
