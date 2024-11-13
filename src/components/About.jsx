import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const section =
      document.getElementById("About");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="bg-slate-800 justify-center items-center grid grid-cols-12 gap-2">
      <div className="col-start-3 col-end-7 text-white mt-10 text-justify">
        <p>
          I am a passionate software developer
          with a diverse skill set and experience
          in building robust applications.
          Throughout my career, I have worked with
          a variety of technologies, including
          Node.js, ExpressJS, MongoDB, ReactJS,
          and NestJS. My expertise spans backend
          development, real-time systems, and
          frontend design, which allows me to
          craft seamless, efficient applications
          that meet both business and user needs.
        </p>
      </div>
      <div className=" col-start-9 col-end-12">
        <img
          src="./assets/reza.jpg"
          alt="profile"
          className=" h-40 rounded-full border-4 border-dotted border-yellow-500"
        />
      </div>
    </div>
  );
};

export default About;
