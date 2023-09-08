import myPic from "../assets/myPic.jpg";
import CV from "../assets/nick-cv.pdf";
import { FiFileText } from "react-icons/fi";

const About = () => {
  return (
    // second flex justify-around gap-x-5 py-20 and eight step need to responsive "md:flex-col md:items-center md:gap-y-10"
    <div
      id="about"
      className="flex justify-around gap-x-5 py-20 md:flex-col md:items-center md:gap-y-10"
    >
      {/* image designer */}
      {/* first w-[300px] rounded-md  and nine step need responsive ""*/}
      <img
        src={myPic}
        alt="Designer"
        className="w-[300px] rounded-md sm:w-[270px]"
      />
      {/* about me text and ten step need responsive "md:gap-y-8" */}
      {/* third w-1/2 flex flex-col justify-between */}
      <div className="w-1/2 flex flex-col justify-between md:gap-y-8">
        <div>
          {/* fourth text-2xl font-bold uppercase mb-3*/}
          <h2 className="text-2xl font-bold uppercase mb-3">
            I am UX/UI Designer
          </h2>
          {/* fifth */}
          <p className="text-xs leading-5 first-letter:ml-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            fugiat suscipit nisi quia ex quasi laborum ab voluptate eveniet
            accusamus possimus repudiandae nulla quas maiores, eos quos aperiam
            repellendus accusantium.
          </p>
        </div>
        {/* downlaod cv */}
        {/* six w-[160px] h-[30px] bg-slate-300 flex justify-around items-center rounded-sm text-sm*/}
        <a
          href={CV}
          download="jayfrancissilao"
          className="w-[160px] h-[30px] bg-slate-300 flex justify-around items-center rounded-sm text-sm"
        >
          <span>Download CV</span>
          <FiFileText />
        </a>
        {/* info and eleven step need responsive "" */}
        {/* seven flex justify-between text-sm */}
        <div className="flex justify-between text-sm sm:flex-col sm:gap-y-3">
          <ul className="font-semibold uppercase">
            <li>name:</li>
            <li>age:</li>
          </ul>
          <ul>
            <li>jay</li>
            <li>22</li>
          </ul>
          <ul className="font-semibold uppercase">
            <li>email:</li>
            <li>address:</li>
          </ul>
          <ul>
            <li>jay</li>
            <li>abra</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
