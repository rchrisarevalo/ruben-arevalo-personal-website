import React from "react";

interface ProjectBtnProps {
  link: string;
}

const ViewProjectBtn: React.FC<ProjectBtnProps> = ({ link }) => {
  return (
    <span>
      <a href={link} target="_blank" className="flex justify-center w-[100%] border border-solid border-cyan-950 bg-cyan-700 p-4 rounded-lg text-white font-[900]">View Project</a>
    </span>
  );
};

export default ViewProjectBtn;
