import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const section =
      document.getElementById("Home");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div>
      <div
        className="h-screen w-screen bg-cover bg-center justify-center items-center flex"
        style={{
          backgroundImage:
            "url('/assets/girl.jpg')",
        }}
      >
        <div className="flex flex-row gap-2">
          <div className="bg-yellow-500 p-3 text-white">
            contact
          </div>
          <div className="border border-1 text-white  p-2">
            projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
