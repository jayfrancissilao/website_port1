import projectData from "../data/projects.json";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

const Project = () => {
  return (
    <div id="project" className="1 my-12 px-12">
      <h1 className="2 text-center text-3xl mb-14 font-semibold uppercase">
        Projects
      </h1>
      <div className="3 flex flex-wrap justify-center gap-14">
        {projectData.map((project, i) => {
          return (
            <div
              key={project.id}
              className="4 flex justify-center rounded-md relative bg-black group"
            >
              <h2 className="5 text-sm absolute top-[-28px]">{project.name}</h2>
              <img
                src={projects[i]}
                alt={project.name}
                width={300}
                className="group-hover:opacity-40 transition-opacity"
              />
              <div
                className="6 absolute bottom-2 flex gap-x-3 underline 
              text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <a href={project.video} target="">
                  Video
                </a>
                <a href={project.code} target="">
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
