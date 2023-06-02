import React from 'react'
import style from '../../style';

const LargeScreens: React.FC = () => {
  const { width, baseText } = style;
  return (
    <div className={`${width} flex-col hidden md:flex`}>
        <div className="flex w-full">
          <div className="w-1/2">
            <h2 className="text-[48px] text-blue font-[600] tracking-[-0.05em] leading-[1.1em] mb-5">
              Limitations of BMI
            </h2>
            <p className={` ${baseText} text-grey md:w-[535px]`}>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="p-6 rounded-[10px] shadow">
              <div className="flex gap-3 mb-3">
                <img src="/images/icon-gender.svg" />
                <h4 className="font-[600] text-[24px] text-blue">Gender</h4>
              </div>
              <p className={` ${baseText} text-grey w-[325px]`}>
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-14 justify-end mb-10">
          <img src="/images/pattern-curved-line-right.svg" />
          <div className="flex gap-6 mt-10 ">
            <div className="shadow p-6 rounded-[10px] z-[15]">
              <div className="flex gap-3 mb-3">
                <img src="/images/icon-age.svg" />
                <h4 className="font-[600] text-[24px] text-blue">Age</h4>
              </div>
              <p className={` ${baseText} text-grey w-[325px]`}>
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
            <div className="shadow p-6 rounded-[10px] z-[15]">
              <div className="flex gap-3 mb-3">
                <img src="/images/icon-muscle.svg" />
                <h4 className="font-[600] text-[24px] text-blue">Muscle</h4>
              </div>
              <p className={` ${baseText} text-grey w-[325px]`}>
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-6 justify-center ">
          <div className="shadow p-6 rounded-[10px] z-[15]">
            <div className="flex gap-3 mb-3">
              <img src="/images/icon-pregnancy.svg" />
              <h4 className="font-[600] text-[24px] text-blue">Pregnancy</h4>
            </div>
            <p className={` ${baseText} text-grey w-[325px]`}>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="shadow p-6 rounded-[10px] z-[15]">
            <div className="flex gap-3 mb-3">
              <img src="/images/icon-race.svg" />
              <h4 className="font-[600] text-[24px] text-blue">Race</h4>
            </div>
            <p className={` ${baseText} text-grey w-[325px]`}>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
  )
}

export default LargeScreens
