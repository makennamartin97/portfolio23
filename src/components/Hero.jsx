import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { makenna } from "../assets";
const Hero = () => {
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='w-[250px] xs:w-[240px] md:w-[320px] w-full'>
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
          className='bg-tertiary rounded-[20px] min-h-[250px] xs:min-h-[240px] md:min-h-[320px] flex justify-evenly items-center flex-col'
        >
          <img
            src={makenna}
            alt='web-development'
            className='object-cover rounded-[20px]'
          />
  
        </div>
      </motion.div>
    </Tilt>
  );
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center mt-9 lg:mt-0`}
      >
        <div className='flex flex-col justify-center items-center mt-5 lg:mt-12'>
          <div className='w-5 h-5 rounded-full bg-[#dfd9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='font-ano2light mt-5 lg:mt-9'>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='font-ano2light'>Makenna Martin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 ml-2`}>
          A software engineer <br className='sm:block hidden' />
            
        with a passion for front end development.
          </p>
          <div className='flex flex-row justify-center items-center mt-20 xs:mt-15 md:mt-20 lg:mt-9 pr-7'>
          <ServiceCard />
          </div>
        </div>
        
      </div>

      <StarsCanvas />
      
      

      <div className='absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
