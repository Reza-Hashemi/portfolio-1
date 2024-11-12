import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const section =
      document.getElementById("Docs");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="flex justify-center items-center bg-slate-800">
reza
    </div>
  );
};

export default Skills;
