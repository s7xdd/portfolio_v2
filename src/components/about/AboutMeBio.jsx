import profileImage from "../../images/profile.jpeg";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="">
      <div className="font-general-regular font-semibold mt-14 text-center">
        <h1 className="text-4xl">Hello World! 👋</h1>
        <p className="mt-10">
        I'm Shamil, a Computer Science grad with a passion for
          transforming lines of code into seamless user experiences. When I'm
          not busy debugging, you can
          find me dreaming up the next big thing in web development. I
          specialize in making the web a more beautiful place with my React
          wizardry. From sleek front-end designs to smooth user interactions,
          I'm all about creating websites that not only look good but feel good
          to use. Oh, and I have a minor addiction to coffee and memes, so feel
          free to send any my way!
        </p>
      </div>
    </div>
  );
};

export default AboutMeBio;
