import Image from "next/image";
import React from "react";
import homeWizardPic from "../public/assets/Projects/homeWizardPic.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const wizardProd = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={homeWizardPic}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Wizard Creator</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app, built with JavaScript and hosted on Firebase, offers an
            enchanting experience for users. With Firebase authentication, users
            can log in and take a 10-question quiz, which uses a custom
            algorithm to sort them into their designated house. After the quiz,
            users can unleash their creativity by crafting a 3D wand using
            Three.js, selecting from 3 unique cores and 3 types of wood. At the
            end of the journey, users receive a personalized certificate
            showcasing their assigned house and custom wand. All progress and
            creations are seamlessly saved in Firebase's database for future
            reference.
          </p>
          <a
            href="https://github.com/Carlosescobar2/Capstone-1"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 bg-blue-600">Code</button>
          </a>
          <a
            href="http://one-sip-b05ef.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 bg-blue-600">Website</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Three.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default wizardProd;
