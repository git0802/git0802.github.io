"use client";
import { skills } from "@/data";
import { Progress } from "antd";

const Skills = () => {
  return (
    <div id="skills" className=" pt-[60px] ">
      <div className="sm:px-16 px-6 sm:pt-16 pt-10 max-w-7xl mx-auto relative z-0">
        <div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Skills
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Tech.
          </h2>
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          With a diverse skill set, I excel in web development. As a full stack
          developer, I specialize in React, Next.js, HTML, CSS, and JavaScript.
          I create responsive interfaces using frameworks like React Three
          Fiber, Tailwind CSS, Material UI, and Ant Design. Additionally, I work
          with MongoDB for database management and Git for version control,
          ensuring efficient collaboration and code management on platforms like
          GitHub.
        </p>
        <div className="mt-10 max-w-3xl ">
          {skills.map((skill, index) => (
            <div key={index}>
              <span>{skill.name}</span>
              <Progress
                percent={skill.level}
                strokeColor={"#FFF"}
                trailColor={"#333"}
                showInfo={false}
              />
            </div>
          ))}
        </div>
        <div className="text-sm italic">
          ** All skills level are self evaluated. **
        </div>
      </div>
    </div>
  );
};

export default Skills;
