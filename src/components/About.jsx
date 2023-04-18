import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link}) => (
  <Tilt className='w-[85px] xs:w-[105px] sm:w-[150px] md:w-[140px] lg:w-[200px]'>
    <a href={link}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] p-5 h-[125px] sm:h-[150px] md:h-[140px] lg:min-h-[200px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[12px] md:text-[16px] lg:text-[18px] text-center mt-1'>
          {title}
        </h3>
      </div>
    </motion.div>
    </a>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software engineer specializing in front end development with 4+ years professional and freelance experience.
        Proficient at translating designs and wireframes into high quality code via Javascript and React workflows. Skilled at maintaining front end performance and optimizing web pages for maximum speed, scalability, and SEO. Passionate about building beautiful user interfaces, bringing innovative ideas to life, and developing new skills as the technology industry advances.
      </motion.p>

      <div className='mt-10 md:mt-20 flex flex-wrap gap-1 justify-between lg:justify-start lg:gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
