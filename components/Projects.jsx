/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
import createWand3D from "../public/assets/Projects/createWand3D.jpeg";
import ExpenseTracker from "../public/assets/Projects/ExpenseTracker.jpeg"
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <h2>What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Wizard Creator"
            backgroundImg={createWand3D}
            projectUrl="https://one-sip-b05ef.web.app/"
            

          />

          <ProjectItem
            title="Budget Checker"
            backgroundImg={ExpenseTracker}
            projectUrl="/expenseTracker"
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
