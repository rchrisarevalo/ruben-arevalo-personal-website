import React from "react";
import "@fontsource/lato";

interface PageSectionProps {
  children: React.ReactNode;
  id: string
}

const PageSection: React.FC<PageSectionProps> = ({ id, children }) => {
  return (
    <div className="w-full pt-64 pb-64 max-sm:pt-32 max-sm:pb-32 font-['Lato'] flex items-center justify-between gap-5" id={id}>
      {children}
    </div>
  );
};

export default PageSection;
