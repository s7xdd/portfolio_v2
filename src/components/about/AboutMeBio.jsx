import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import css3 from "../../images/tools/css3.svg";
import expressjs from "../../images/tools/expressjs.svg";
import figmabig from "../../images/tools/figma-big.svg";
import javascript from "../../images/tools/javascript.svg";
import mongodb from "../../images/tools/mongodb.svg";
import nodejs from "../../images/tools/nodejs.svg";
import react from "../../images/tools/react.svg";
import tailwindcss from "../../images/tools/tailwindcss.svg";
import typescript from '../../images/tools/typescript.svg';
import typescriptbig from '../../images/tools/typescript-big.svg';
import javascriptbig from '../../images/tools/javascript-big.svg';

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="text-ternary-dark dark:text-primary-light">
      <div className="flex flex-col justify-center font-general-regular font-semibold mt-14 text-center">
        <h1 className="text-4xl">Hello World! 👋</h1>
        <p className="mt-10">
          I'm Shamil, a Computer Science grad with a passion for transforming
          lines of code into seamless user experiences. When I'm not busy
          debugging, you can find me dreaming up the next big thing in web
          development. I specialize in making the web a more beautiful place
          with my React wizardry. From sleek front-end designs to smooth user
          interactions, I'm all about creating websites that not only look good
          but feel good to use. Oh, and I have a minor addiction to coffee and
          memes, so feel free to send any my way!
        </p>
      </div>

      <div className="flex flex-col justify-center mt-20 text-3xl">
        <div className="text-center">
          <h1>My Skills</h1>
          <div className=""> 
            <div className="flex justify-center gap-10">
				<div className="skills"><img src={typescriptbig} alt="" /></div>
				<div className="skills"><img src={javascriptbig} alt="" /></div>
				<div className="skills"><img src={javascriptbig} alt="" /></div>
				<div className="skills"><img src={javascriptbig} alt="" /></div>
            </div>
			<div className="flex justify-center gap-10">
				<div className="skills"><img src={javascriptbig} alt="" /></div>
				<div className="skills"><img src={javascriptbig} alt="" /></div>
				<div className="skills"><img src={javascriptbig} alt="" /></div>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;
