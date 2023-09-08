import Data from "../data/skills.json";
import Figma from "../assets/skills/figma.png";
import Photoshop from "../assets/skills/photoshop.png";
import AdobeIllustrator from "../assets/skills/adobeIllustrator.png";
import AdobeXd from "../assets/skills/adobeXd.png";
import Sketch from "../assets/skills/sketch.png";
import Tailwind from "../assets/skills/tailwind.png";
import Js from "../assets/skills/javascript.png";
import ReactJs from "../assets/skills/react.png";

const Skills = () => {
  const images = [
    Figma,
    Photoshop,
    AdobeIllustrator,
    AdobeXd,
    Sketch,
    Tailwind,
    Js,
    ReactJs,
  ];

  return (
    <div id="skills" className="1 my-12 px-12">
      {/* text for skills */}
      <div className="2 flex flex-col gap-y-2 mb-5 md:items-center">
        <h1 className="3 text-2xl font-semibold uppercase">Skills</h1>
        <p className="4 text-xl text-gray-600">What i know best</p>
      </div>
      {/* skills set */}
      <div className="5 flex flex-wrap justify-between gap-5 md:justify-center">
        {Data.map((tech, i) => {
          return (
            <div
              key={tech.id}
              className="bg-slate-200 w-[180px] aspect-square flex flex-col 
              justify-center items-center gap-y-3 rounded-md shadow-sm 
              hover:shadow-md transition-shadow"
            >
              <img src={images[i]} alt={tech.name} width={60} />
              <h3 className="6 text-[14px] tracking-wider">{tech.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
