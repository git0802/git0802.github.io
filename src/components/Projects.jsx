"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [data, setData] = useState([]);

  // Fetch user data when page number is updated
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/projects");
        setData(res.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          return <div>Not found</div>;
        } else {
          console.error(err);
          return <div>Error</div>;
        }
      }
    }
    fetchData();
  }, []);

  if (data.length < 0) return <div>Loading...</div>;

  return (
    <div id="projects" className="pt-[60px]">
      <div className="sm:px-16 px-6 sm:pt-16 pt-6 max-w-7xl mx-auto relative z-0">
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Throughout my journey as a developer, I have worked on various
          projects that have allowed me to apply my skills and showcase my
          abilities. These projects range from personal websites and web
          applications to collaborative projects with other developers. Each
          project demonstrates my ability to create visually appealing,
          functional, and optimized digital solutions.
        </p>

        {/* <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mt-8 ">
      {projects.map((project) => (<ProjectCard data={project} key={project.id} />))}
      </div> */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mt-8 ">
          {data?.map((project) => (
            // <ProjectCard data={project} key={project.id} />
            <div className="rounded-sm bg-[#222]">
              <div className="">
                <img
                  className="rounded-sm aspect-video object-cover "
                  src={project?.properties?.Image?.files[0]?.file.url}
                  alt={""}
                />
              </div>
              <div className="flex p-2 justify-between">
                <h2 className="text-xl">
                  {project?.properties.Name.title[0].plain_text}
                </h2>
                <ProjectDetails data={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
