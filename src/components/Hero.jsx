import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { makenna } from "../assets";
const Hero = () => {
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='w-[190px] md:w-[230px] lg:w-[220px] w-full rounded-[20px]'>
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
          className='bg-tertiary rounded-[20px] min-h-[190px] md:min-h-[230px] lg:min-h-[220px] flex justify-evenly items-center flex-col'
        >
          <img
            src={makenna}
            alt='Software Engineer'
            className='object-cover rounded-[20px]'
          />
  
        </div>
      </motion.div>
    </Tilt>
  );
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 lg:top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center mt-32 md:mt-32 lg:mt-8`}
      >
        <div className='flex flex-col items-center'>
          <div className='w-5 h-5 rounded-full bg-[#dfd9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='font-ano2light'>
          <h1 className={`${styles.heroHeadText} tracking-wide`}>
            Makenna Martin
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
          Software Engineer <br className='sm:block hidden' />
with a particular passion for front end development <br className='sm:block hidden' />
 and blockchain technology.
          </p>
          <div className='flex flex-row justify-center items-center mt-10 md:mt-8 xl:mt-16 pr-7'>
          <ServiceCard />
          </div>
        </div>
        
      </div>

      <StarsCanvas />
      
      

      <div className='absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center mb-8'>
        <a href='#about'>
          <div className='w-[27px] h-[45px] lg:w-[35px] lg:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 z-50'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
