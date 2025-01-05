import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#4a4fdd]">
            About Me
          </p>
          <h2 className="py-4">Who I am</h2>

          <p className="py-2 text-gray-600">
            In 2020, while attending Sacramento State for Business Information
            Systems, the COVID-19 pandemic gave me the time to discover my true
            passion for web development. After watching countless videos about
            software engineers and their careers, I became intrigued by the
            possibilities of this field. I began teaching myself HTML and
            quickly fell in love with coding. Realizing I needed more guidance
            to pursue this path, I sought out a structured program to further
            develop my skills in web development.
          </p>
          <p className="py-2 text-gray-600">
            I began my software development journey at DevMountain, where I
            completed an intensive 4-month bootcamp focused on React,
            JavaScript, CSS, and HTML. Despite the challenges, I thrived,
            building meaningful connections and developing a strong foundation
            in web development. After graduation, I dove into personal projects,
            collaborated with peers, and explored new technologies to expand my
            skill set. My passion for coding continues to drive me to learn,
            grow, and embrace new challenges.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <img
            className="rounded-xl"
            src="https://omedia.dev/sites/default/files/styles/blog_full/public/2021-07/eq.jpg?itok=oFWrM1Z0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
