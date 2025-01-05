import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carlos Escobar | Front-End Developer</title>
        <meta
          name="description"
          content="Carlos Escobar is a passionate Front-End Developer skilled in React, JavaScript, and more. Check out my portfolio!"
        />
        <meta
          name="keywords"
          content="Carlos Escobar, Front-End Developer, React, JavaScript, Portfolio"
        />
        <meta
          property="og:title"
          content="Carlos Escobar | Front-End Developer"
        />
        <meta
          property="og:description"
          content="Carlos Escobar is a passionate Front-End Developer skilled in React, JavaScript, and more. Explore my projects and contact me."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />{" "}
        {/* Replace with an actual image path */}
        <meta property="og:url" content="https://your-website.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Carlos Escobar | Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="Explore Carlos Escobar's portfolio and learn about his skills in React, JavaScript, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-website.com" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
