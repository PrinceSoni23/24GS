import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = () => {
  const leftColumnProjects = [
    {
      title: "Bulk Text / Whatsapp / Email Marketing",
      url: "/email1.mp4",
    },
    {
      title: "Website Design",
      url: "https://cdn.cuberto.com/cb/projects/riyadh/cover.mp4",
    },
    {
      title: "Third Party Software Installation & Support",
      url: "/softw.mp4",
    },
    {
      title: "Project Installation Services",
      url: "/pro1.mp4",
    },
    {
      title: "Network Monitoring and Reports",
      url: "https://cdn.cuberto.com/cb/projects/cisco/cover.mp4",
    }
  ];

  const rightColumnProjects = [
    {
      title: "Virus / Spyware Removal",
      url: "/virus.mp4",
    },
    {
      title: "Help Desk Support",
      url: "/sup.mp4",
    },
    {
      title: "Data Back-up Services",
      url: "back.mp4",
    },
    {
      title: "Technology Planning",
      url: "/techno.mp4",
    },
    {
      title: "PC Support",
      url: "https://cdn.cuberto.com/cb/projects/ferrumpipe/cover.mp4",
    }
  ];

  return (
    <div className="bg-[#533fd7] text-white h-fit pt-2 md:pt-0 pb-0 md:pb-32 px-6 md:px-32 md:rounded-t-[4rem]">
      <div className="text-5xl md:text-9xl py-14 md:py-28 font-light">
        <div>Featured</div>
        <div className="flex items-center md:items-end my-1">
          <div className="h-14 md:h-28 w-20 md:w-40 rounded-full overflow-hidden">
            <video
              src="https://cdn.cuberto.com/cb/home/featured/header.mp4?2"
              className=""
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div>
            <span
              id="design"
              className="font-normal tracking-wide text-[3.2rem] md:text-[8.5rem]"
            >
              &nbsp;Services
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-14">
        <div data-scroll data-scroll-speed="0" className="w-[94%] mx-auto md:mx-0 md:w-[36%]">
          {leftColumnProjects.map((project) => (
            <ProjectCard key={project.title} title={project.title} url={project.url} />
          ))}
        </div>
        <div data-scroll data-scroll-speed="0.5" className="w-[94%] mx-auto md:mx-0 md:w-[36%] md:mt-52">
          {rightColumnProjects.map((project) => (
            <ProjectCard key={project.title} title={project.title} url={project.url} />
          ))}
        </div>
      </div>
      {/* Explore All Services Button */}
      <div className="flex justify-center mt-12">
      <Link href="/services">  <button
          className="bg-white text-[#533fd7] font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-110 hover:bg-[#6a4df7] hover:text-white shadow-lg"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          Explore All Services and Prices
        </button> </Link>
      </div>
    </div>
  );
};

export default Projects;
