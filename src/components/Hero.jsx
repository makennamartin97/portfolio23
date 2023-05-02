import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import Tilt from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { makenna } from "../assets";
const Hero = () => {
  const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='w-[180px]  md:w-[200px] lg:w-[200px] xl:w-[230px] rounded-[20px]'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] min-h-[180px] md:min-h-[200px] lg:min-h-[200px] xl:min-h-[230px] flex justify-evenly items-center flex-col'
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
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <div
        className={`absolute top-[70px] md:top-[55px] lg:top-[50px] xl:top-[130px] mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center mt-16 w-full`}
      >
        <div className='flex flex-col items-center'>
          <div className='w-5 h-5 rounded-full bg-[#dfd9ff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='font-ano2light flex flex-col justify-center'>
          <h1 className={`${styles.heroHeadText} tracking-wide text-left`}>
            Makenna Martin
          </h1>
          <p className={`${styles.heroSubText} mt-2 lg:mt-0 text-left`}>
          Software Engineer <br className='sm:block hidden' />
with a passion for front end development <br className='sm:block hidden' />
 and blockchain technology.
          </p>

        </div>
      </div>
      <div className="flex flex-row w-full justify-center absolute top-[330px] sm:top-[350px] md:top-[310px] lg:top-[320px] xl:top-[455px]">
          <ServiceCard />
      </div>
      <div className='absolute bottom-8 w-full flex justify-center items-center mb-2 md:mb-1'>
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
      

      <StarsCanvas />
      
      

    </section>
  );
};

export default Hero;
