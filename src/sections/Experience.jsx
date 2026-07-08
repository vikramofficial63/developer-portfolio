import {
  FaCode,
  FaLaptopCode,
  FaVideo,
  FaRocket,
} from "react-icons/fa";

const experiences = [
  {
    icon: FaCode,
    year: "2023 - Present",
    title: "Frontend Developer (Freelance)",
    description:
      "Building modern React.js web applications, landing pages and business websites with clean UI and responsive design.",
  },
  {
    icon: FaVideo,
    year: "2024 - Present",
    title: "Video Editor",
    description:
      "Creating YouTube videos, AI-generated content, reels and promotional videos with premium transitions and motion graphics.",
  },
  {
    icon: FaLaptopCode,
    year: "Projects",
    title: "Professional Development",
    description:
      "Developed Portfolio Websites, ReelBoost Studio, News Web App and several responsive frontend projects.",
  },
  {
    icon: FaRocket,
    year: "Current Goal",
    title: "Open To Opportunities",
    description:
      "Actively looking for Frontend Developer, React.js Developer and Remote Freelance opportunities.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#050816]"
    >
      <div className="container">

        <div className="text-center !pb-8">

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            My Journey
          </h2>

          <p className="text-gray-400 mt-6 w-full mx-auto">
            My professional journey in frontend development and creative work.
          </p>

        </div>

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-blue-500/30"></div>

          <div className=" !space-y-10 p-10">

            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

                    <Icon />

                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-blue-500 transition">

                    <span className="text-blue-400 text-sm">
                      {item.year}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-400 leading-8">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;