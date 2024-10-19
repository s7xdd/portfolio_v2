import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import css3 from "../../images/tools/css3.svg";
import expressjs from "../../images/tools/expressjs.svg";
import figma from "../../images/tools/figma.svg";
import javascript from "../../images/tools/javascript.svg";
import mongodb from "../../images/tools/mongodb.svg";
import nodejs from "../../images/tools/nodejs.svg";
import react from "../../images/tools/react.svg";
import tailwindcss from "../../images/tools/tailwindcss.svg";
import typescript from '../../images/tools/typescript.svg'
import profile from '../../images/profile.jpeg'

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <div className="">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-between items-center sm:flex-row md:mt-7"
      >
        <div className="">
          <div className="image  flex justify-center">
            {/* <img className="object-cover" src={Profile} height={300} width={300} alt="image description"/> */}
            <img
              src={profile}
              className="flex justify-center mb-12 profile"
              alt=""
            />
          </div>
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.9,
                delay: 0.1,
              }}
              className="name flex justify-center font-general-semibold text-4xl lg:text-4xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
            >
              Hi, I'm Mohammed Shamil
            </motion.h1>

            <div className="flex justify-center">
              <TypeAnimation
                sequence={[
                  "A full stack developer",
                  1500,
                  "A Front end developer",
                  1500,
                  "A Backend developer",
                  1500,
                  "A React developer",
                  1500,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
                className="font-general-medium mt-3 text-lg md:text-xl lg:text-1xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
              />
            </div>

            <div className="flex justify-center">
              <a
                download="Mohammed_Shamil.pdf"
                href="/files/Mohammed_Shamil.pdf"
                className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                aria-label="Download Resume"
              >
                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                <span className="text-sm sm:text-lg font-general-medium duration-100">
                  Download CV
                </span>
              </a>
            </div>
          </div>
          <div className="text-center mt-5">
            <div>
              <h5 className="font-semibold  text-ternary-dark dark:text-primary-light">Tools I use</h5>
            </div>
            <div className="border rounded-lg bg-gray-600 mt-4">
              <ul className="flex justify-center p-5 gap-10 px-8">
                <li>
                  <img src={javascript} alt="" />
                </li>
                <li>
                  <img src={typescript} alt="" />
                </li>
                <li>
                  <img src={react} alt="" />
                </li>
                <li>
                  <img src={nodejs} alt="" />
                </li>
                <li>
                  <img src={expressjs} alt="" />
                </li>
                <li>
                  <img src={mongodb} alt="" />
                </li>
                <li>
                  <img src={tailwindcss} alt="" />
                </li>
                <li>
                  <img src={css3} alt="" />
                </li>
                <li>
                  <img src={figma} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AppBanner;
