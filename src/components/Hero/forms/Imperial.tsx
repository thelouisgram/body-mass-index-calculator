import React, { useState, useEffect } from "react";
import { updateBmi, updateHeight } from "../../../store/stateSlice";
import { useDispatch } from "react-redux";

const Imperial: React.FC = () => {
  const dispatch = useDispatch();
  // Local state to hold imperial data
  const [imperialData, setImperialData] = useState<{
    heightFeet: string;
    heightInches: string;
    weightPounds: string;
  }>({
    heightFeet: "",
    heightInches: "",
    weightPounds: "",
  });

  // Function to update local state: imperial data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImperialData({
      ...imperialData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Condition to calculate bmi
    if (
      imperialData.heightFeet &&
      imperialData.weightPounds
    ) {
      if (!imperialData.heightInches) {setImperialData({...imperialData, heightInches: "0"})}
      const heightFeet = parseFloat(imperialData.heightFeet);
      const heightInches = parseFloat(imperialData.heightInches);
      const weightPounds = parseFloat(imperialData.weightPounds);
      const heightInchesTotal = heightFeet * 12 + heightInches;
      const heightMeters = heightInchesTotal * 0.0254;
      const weightKilograms = weightPounds * 0.453592;
      const bmiCalc: number = weightKilograms / (heightMeters * heightMeters);
      // Update global state: bmi
      dispatch(updateBmi(bmiCalc));
      // update global state: height
      dispatch(updateHeight(heightMeters));
    } else {
      dispatch(updateBmi(0));
    }
  }, [dispatch, imperialData]);

  return (
    // Parent container
    <div>
      {/* Form */}
      <form className="w-full flex flex-col gap-2">
        {/* Height Container */}
        <div className="flex flex-col ss:flex-row gap-5">
          {/* Feet container */}
          <div className="flex flex-col w-full ss:w-1/2">
          {/* Feet label */}
            <label
              htmlFor="heightFeet"
              className="text-[14px] font-[600] text-grey mb-1"
            >
              Feet
            </label>
            <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
              {/* Feet input */}
              <input
                id="heightFeet"
                className="w-full border-none outline-none text-blue text-[22px] font-[600] placeholder:text-grey 
                placeholder:text-[22px] placeholder:font-[600]"
                placeholder="0"
                value={imperialData.heightFeet}
                name="heightFeet"
                onChange={handleInputChange}
                type="number"
              />
              <h3 className="text-skyBlue text-[22px] font-[600]">ft</h3>
            </div>
          </div>
          {/* Inches Container */}
          <div className="flex flex-col w-full ss:w-1/2">
            {/* Inches Label */}
            <label
              htmlFor="heightInches"
              className="text-[14px] font-[600] text-grey mb-1"
            >
              Inches
            </label>
            <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
              {/* Inches input */}
              <input
                id="heightInches"
                className="w-full border-none outline-none text-blue text-[22px] font-[600] placeholder:text-grey 
                placeholder:text-[22px] placeholder:font-[600]"
                placeholder="0"
                value={imperialData.heightInches}
                name="heightInches"
                onChange={handleInputChange}
                type="number"
              />
              <h3 className="text-skyBlue text-[22px] font-[600]">in</h3>
            </div>
          </div>
        </div>
        {/* Weight Container */}
        <div className="flex gap-5">
          {/* Pounds Container */}
          <div className="flex flex-col w-full ss:w-1/2">
            {/* Label for pounds */}
            <label
              htmlFor="weightPounds"
              className="text-[14px] font-[600] text-grey mb-1"
            >
              Pounds
            </label>
            <div className="px-4 py-3 w-full border-[1px] border-lightBlue rounded-[10px] flex justify-between">
              {/* Pounds Input */}
              <input
                id="weightPounds"
                className="w-full border-none outline-none text-blue text-[22px] font-[600] placeholder:text-grey 
                placeholder:text-[22px] placeholder:font-[600]"
                placeholder="0"
                value={imperialData.weightPounds}
                name="weightPounds"
                onChange={handleInputChange}
                type="number"
              />
              <h3 className="text-skyBlue text-[22px] font-[600]">lb</h3>
            </div>
          </div>
          {/* Empty div to hold half of the weight width */}
          <div className="hidden ss:flex w-1/2"/>
        </div>
      </form>
    </div>
  );
};

export default Imperial;
