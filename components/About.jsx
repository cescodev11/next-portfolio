import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8  ">
        <div className="col-span-2">
          <p>About Me</p>
          <h2>Who I am</h2>
          <p>I am a 20 year old Web Developer</p>

          <p>
            In 2020 I was attending Sacramento State for Business Information
            Systems. Due to Covid, I had extra time to find my true passion for
            web development. I watched many videos about the lives of software
            engineers and there came many perks. I started to teach myself
            simple HTML and fell in love. Little did I know that HTML isn’t the
            best representation of a developer. Deciding that I needed some kind
            of guidance to lead me down the right path I set out to find a
            course.
          </p>
          <p>
            My journey began in the middle of 2021 when I attended DevMountain
            for a rigorous 4-month coding Bootcamp. While coding, I specialized
            in React, JavaScript, CSS, and HTML. Although there were many
            stressful times I completed the course while building amazing
            connections. Fascinated by the intricacy of coding I wanted to learn
            much more. After Devmoutain I have spent time building personal
            projects, collaborating with my peers, testing new languages, and practicing future
            interview questions.
          </p>
          <p>Check out my latest work</p>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
