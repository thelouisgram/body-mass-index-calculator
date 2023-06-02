import React, { useState, useEffect } from "react";
import { updateBmi, updateHeight } from "../../../store/stateSlice";
import { useDispatch } from "react-redux";

const Metric: React.FC = () => {
  const dispatch = useDispatch();
  // Local state to hold form values
  const [metricData, setMetricData] = useState<{
    height: string;
    weight: string;
  }>({
    height: "",
    weight: "",
  });

  // Function to update metricData
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetricData({
      ...metricData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Condition to calculate Bmi
    if (metricData.weight && metricData.height) {
      const weight = parseFloat(metricData.weight);
      const height = parseFloat(metricData.height)/ 100;
      const bmiCalc: number = weight / (height * height);
      // Update global state: bmi
      dispatch(updateBmi(bmiCalc));
      // update global state: height
      dispatch(updateHeight(height))
    } else {
      dispatch(updateBmi(0));
    }
  }, [dispatch, metricData]);

  return (
    // Parent container
    <div>
      {/* Form */}
      <form className="w-full flex flex-col ss:flex-row gap-5">
        {/* Height Input container */}
        <div className="flex flex-col w-full ss:w-1/2">
          {/* Height label */}
          <label
            htmlFor="height"
            className="text-[14px] font-[600] text-grey mb-1"
          >
            Height
          </label>
          <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
            {/* Height input */}
            <input
              id="height"
              className="w-full border-none outline-none text-blue text-[22px] font-[600] placeholder:text-grey 
                placeholder:text-[22px] placeholder:font-[600]"
              placeholder="0"
              value={metricData.height}
              name="height"
              onChange={handleInputChange}
              type="number"
            />
            <h3 className="text-skyBlue text-[22px] font-[600]">cm</h3>
          </div>
        </div>
        {/* Weight Container */}
        <div className="flex flex-col w-full ss:w-1/2">
          {/* Weight label */}
          <label
            htmlFor="weight"
            className="text-[14px] font-[600] text-grey mb-1"
          >
            Weight
          </label>
          <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
            {/* weight input */}
            <input
              id="weight"
              className="w-full border-none outline-none text-blue text-[22px] font-[600] placeholder:text-grey 
                placeholder:text-[22px] placeholder:font-[600]"
              placeholder="0"
              value={metricData.weight}
              name="weight"
              onChange={handleInputChange}
              type='number'
            />
            <h3 className="text-skyBlue text-[22px] font-[600]">kg</h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Metric;
