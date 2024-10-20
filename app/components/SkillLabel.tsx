import React, { Key } from "react";

interface SkillLabelProps {
  skillName: string;
  key: Key
}

const SkillLabel: React.FC<SkillLabelProps> = ({ skillName }) => {
  return (
    <span className="flex items-center w-[100px] h-[50px] mb-5 rounded-xl text-center justify-center mr-10 bg-slate-500 text-white font-[800] border-2 border-solid border-slate-300 p-5 pl-7 pr-7">
      {skillName}
    </span>
  );
};

export default SkillLabel;
