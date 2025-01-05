/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
import createWand3D from "../public/assets/Projects/createWand3D.jpeg";
import ExpenseTracker from "../public/assets/Projects/ExpenseTracker.jpeg";
import teslaClonePic from "../public/assets/Projects/teslaClonePic.png";
import d2dTodoListPic from "../public/assets/Projects/d2dtodolistpic.jpeg";
const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#4a4fdd]">
          Projects
        </p>
        <h2>What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Wizard Creator"
            backgroundImg={createWand3D}
            projectUrl="/wizardProd"
          />

          <ProjectItem
            title="Budget Checker"
            backgroundImg={ExpenseTracker}
            projectUrl="/expenseTracker"
          />

          <ProjectItem
            title="Tesla Clone"
            backgroundImg={teslaClonePic}
            projectUrl="/teslaClone"
          />
          <ProjectItem
            title="D2D todoList"
            backgroundImg={d2dTodoListPic}
            projectUrl="/d2dTodoList"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
