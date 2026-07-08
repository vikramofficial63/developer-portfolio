import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vite", icon: SiVite },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#050816]"
    >
      <div className="container pt-24 pb-24 lg:pt-32 lg:pb-32">

        {/* Heading */}

        <div className="w-full text-center mb-24 mb-16 lg:mb-20">

          <span className="inline-block text-blue-500 uppercase tracking-[5px] text-base sm:text-lg font-bold">
            My Skills
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tech Stack & Tools
          </h2>

<p className="mt-6 mb-5 !mt-6 !mb-5 text-gray-400 text-base sm:text-lg lg:text-xl leading-8">
  Technologies I use to build fast, responsive and modern web
  applications with clean architecture and premium UI.
</p>

        </div>

        {/* Skills Grid */}

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-7 mt-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600/10"
              >
                <Icon className="text-4xl sm:text-5xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />

                <h3 className="mt-5 text-center text-sm sm:text-base lg:text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;