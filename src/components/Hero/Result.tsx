import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Result: React.FC = () => {
  // Local state to hold min and max healthy weight
  const [minWeight, setMinWeight] = useState<number>(0);
  const [maxWeight, setMaxWeight] = useState<number>(0);

  // Destructuring global state
  const { bmi, system, height } = useSelector((state: RootState) => state.app);

  // Function to determine the BMI result based on the calculated BMI value
  const result = (bmi: number) => {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi < 25) {
      return "in the healthy weight range";
    } else if (bmi < 30) {
      return "overweight";
    } else {
      return "obese";
    }
  };

  useEffect(() => {
    // Calculate metric min and max healthy weight
    if (system === "metric") {
      const newMinWeight = 18.5 * (height * height);
      const newMaxWeight = 24.9 * (height * height);
      setMinWeight(newMinWeight);
      setMaxWeight(newMaxWeight);
    } 
    // Calculate Imperial min and max healthy weight
    else {
      const newMinWeight = 18.5 * (height * height) * 2.20462;
      const newMaxWeight = 24.9 * (height * height) * 2.20462;
      setMinWeight(newMinWeight);
      setMaxWeight(newMaxWeight);
    }
  }, [system, height]);

  return (
    // Parent Container
    <div className="p-6 h-auto s:h-[110px] bg-skyBlue rounded-[10px] ss:rounded-r-full flex flex-col justify-center">
      {/* Welcome and information container */}
      {!bmi ? (
        <div>
          <h2 className="text-[24px] font-[600] text-white mb-1">Welcome!</h2>
          <p className="text-white text-[13px]">
            Enter your height and weight, and you'll see your BMI result here.
          </p>
        </div>
      ) : (
        // Metric Result
        (system === "metric" && (
          <div className="w-full flex flex-col ss:flex-row gap-4 ss:justify-between text-white ss:items-center">
            <div className="flex flex-col">
              <h5 className="text-[14px] font-[500]">Your BMI is...</h5>
              <h2 className="text-[48px] leading-[1.1em] font-bold">
                {bmi.toFixed(2)}
              </h2>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.05em] ss:w-[250px]">
                Your BMI suggests you're {result(bmi)}. Your ideal weight is
                between {minWeight.toFixed(1)}kg and {maxWeight.toFixed(1)}kg.
              </p>
            </div>
          </div>
        )) ||
        // Imperial result
        (system === "imperial" && (
          <div className="w-full flex flex-col ss:flex-row gap-4 ss:justify-between text-white ss:items-center">
            <div className="flex flex-col">
              <h5 className="text-[14px] font-[500]">Your BMI is...</h5>
              <h2 className="text-[48px] leading-[1.1em] font-bold">
                {bmi.toFixed(2)}
              </h2>
            </div>
            <div>
              <p className="text-[13px] tracking-[0.05em] w-[250px]">
                Your BMI suggests you're {result(bmi)}. Your ideal weight is
                between {minWeight.toFixed(1)}lbs and {maxWeight.toFixed(1)}lbs.
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Result;
