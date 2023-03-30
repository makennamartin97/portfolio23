import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const ServiceCard = ({ icon }) => (
    <div className='w-[50px] lg:w-[80px] green-pink-gradient rounded-[15px] lg:rounded-[20px]'>
        <div className='p-[1px] rounded-[20px]'>
          <div className='bg-tertiary min-h-[50px] lg:min-h-[80px] flex justify-evenly p-3 rounded-[15px] lg:rounded-[20px]'>
          <img
            src={icon}
            alt='web-development'
            className='object-cover'
          />
          </div>
        </div>
    </div>
  );
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row flex-wrap gap-8 sm:gap-3 justify-center'>
        {technologies.map((technology) => (
          <div key={technology.name}>
            <ServiceCard icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
