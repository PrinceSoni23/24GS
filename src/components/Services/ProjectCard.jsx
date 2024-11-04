import React from "react";

const ProjectCard = ({ title, url }) => {
  return (
    <div>
    <div className="project-card-container relative my-8 md:my-2 w-full h-fit rounded-3xl overflow-hidden group">
      <video src={url} loop autoPlay muted className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"></video>
      
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <span>{title}</span>
      </div>
      </div>
      {/* Title below the card with disappearing effect on hover */}
      <p className="my-0 text-xl transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        {title}
      </p>
      </div>
  );
};

export default ProjectCard;
