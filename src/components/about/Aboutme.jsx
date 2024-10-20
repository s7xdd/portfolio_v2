import React from "react";
import css3big from "../../images/tools/css3-big.svg";
import expressjsbig from "../../images/tools/express-big.svg";
import figmabig from "../../images/tools/figma-big.svg";
import mongodbbig from "../../images/tools/mongodbbig.svg";
import nodejsbig from "../../images/tools/nodejs-big.svg";
import reactbig from "../../images/tools/reactbig.png";
import typescriptbig from "../../images/tools/typescript-big.svg";
import htmlbig from "../../images/tools/html-big.svg";
import javascriptbig from "../../images/tools/javascript-big.svg";
import java from "../../images/tools/java-big.svg";
import cbig from "../../images/tools/c-big.svg";
import vitebig from "../../images/tools/vite-big.svg";
import chakrabig from "../../images/tools/chakra-big.svg";
import bootstrapbig from "../../images/tools/bootstrap-big.svg";
import postmanbig from "../../images/tools/postman-big.svg";
import npm from "../../images/tools/npm-big.svg";
import tailwindcssbig from "../../images/tools/tailwindcss.svg";

const Aboutme = () => {
  return (
    <div className="text-ternary-dark dark:text-primary-light">
      <div className="flex flex-col justify-center font-general-regular font-semibold sm:mt-20 text-center">
        <h1 className="text-4xl">Hello World! 👋</h1>
        <p className="mt-10 container">
          I'm Mohammed, a computer science graduate with a passion for
          transforming lines of code into seamless{" "}
          user experiences. Having a solid foundation
          in web development technologies, particularly React, Node.js, and
          MongoDB, I am eager to bring my skills into real world organisations so as
          to help develop and improve existing systems. 
        </p>
      </div>
      <div className="flex flex-col justify-center mt-20 text-3xl">
        <div className="flex flex-col justify-center text-center">
          <h1>My Skills</h1>
          <div className="flex justify-center">
            <div className="mt-10 skills">
              <a href="https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.">
                <img src={htmlbig} alt="HTML" className="p-5 " />
              </a>
              <a href="https://en.wikipedia.org/wiki/CSS">
                <img src={css3big} alt="CSS3" className="p-5" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src={javascriptbig} alt="JavaScript" className="p-5" />
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Glossary/TypeScript">
                <img src={typescriptbig} alt="TypeScript" className="p-5" />
              </a>

              <a href="https://www.react.dev/">
                <img src={reactbig} alt="React" className="p-5" />
              </a>
              <a href="https://www.vite.dev/">
                <img src={vitebig} alt="Vite" className="p-5" />
              </a>
              <a href="https://www.nodejs.org/en">
                <img src={nodejsbig} alt="Node.js" className="p-5" />
              </a>
              <a href="https://expressjs.com/">
                <img src={expressjsbig} alt="Express.js" className="p-5" />
              </a>
              <a href="https://tailwindcss.com/">
                <img src={tailwindcssbig} alt="Tailwind CSS" className="p-5" />
              </a>
              <a href="https://www.figma.com">
                <img src={figmabig} alt="Figma" className="p-5" />
              </a>
              <a href="https://www.mongodb.com">
                <img src={mongodbbig} alt="MongoDB" className="p-5" />
              </a>
              <a href="https://www.chakra-ui.com">
                <img src={chakrabig} alt="Chakra UI" className="p-5" />
              </a>
              <a href="https://getbootstrap.com/">
                <img src={bootstrapbig} alt="Bootstrap" className="p-5" />
              </a>
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)">
                <img src={java} alt="Java" className="p-5" />
              </a>
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                <img src={cbig} alt="C" className="p-5" />
              </a>
              <a href="https://www.postman.com">
                <img src={postmanbig} alt="Postman" className="p-5" />
              </a>
              <a href="https://www.npmjs.com">
                <img src={npm} alt="NPM" className="p-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
