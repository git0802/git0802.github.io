const About = () => {
  return (
    <div className="pt-[60px]" id="about">
      <div className="sm:px-16 px-6 sm:pt-16 pt-10 max-w-7xl mx-auto relative z-0">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About.</h2>
      </div>

      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome! I'm Dilkhush Raj, a BCA student and aspiring software engineer from Bihar, India. With a focus on full stack web development, I'm passionate about creating innovative and user-friendly digital experiences. My expertise includes React, Next.js, HTML, CSS, and JavaScript for front-end, and Node.js, MongoDB for back-end. I'm also skilled in Git and GitHub for version control and collaboration. Explore my portfolio for projects that demonstrate my abilities and dedication to growth.
      </p>
      {/* <AstronautCanvas /> */}
    </div>
    </div>
  );
};

export default About;
