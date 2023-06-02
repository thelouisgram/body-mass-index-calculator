import React, { useState, useEffect } from "react";
import { updateBmi, updateHeight } from "../../../store/stateSlice";
import { useDispatch } from "react-redux";

const Metric: React.FC = () => {
  const dispatch = useDispatch();
  const [metricData, setMetricData] = useState<{
    height: string;
    weight: string;
  }>({
    height: "",
    weight: "",
  });

  console.log(metricData)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMetricData({
      ...metricData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (metricData.weight && metricData.height) {
      const weight = parseFloat(metricData.weight);
      const height = parseFloat(metricData.height)/ 100;
      const bmiCalc: number = weight / (height * height);
      dispatch(updateBmi(bmiCalc));
      dispatch(updateHeight(height))
    } else {
      dispatch(updateBmi(0));
    }
  }, [dispatch, metricData]);

  return (
    <div>
      <form className="w-full flex flex-col ss:flex-row gap-5">
        <div className="flex flex-col w-full ss:w-1/2">
          <label
            htmlFor="height"
            className="text-[14px] font-[600] text-grey mb-1"
          >
            Height
          </label>
          <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
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
        <div className="flex flex-col w-full ss:w-1/2">
          <label
            htmlFor="weight"
            className="text-[14px] font-[600] text-grey mb-1"
          >
            Weight
          </label>
          <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
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
