import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    title: "Editors Portfolio Website",
    image: "/projects/editor-portfolio.png",
    description:
      "A premium portfolio website for professional editors with smooth animations, modern UI, responsive design and optimized performance.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vikramofficial63/video-editor-portfolio.git",
    live: "https://reelbooststudio.netlify.app/",
  },
  {
    title: "E-Commerce Dashboard",
    image: "/projects/ecommerce-dashboard.png",
    description:
      "A fully responsive admin dashboard featuring analytics, charts, order management and modern UI built with React.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/vikramofficial63/modern-mern-ecommerce.git",
    live: "https://modern-ecommerce-store1.netlify.app/",
  },
  {
    title: "News Web Application",
    image: "/projects/news-app.png",
    description:
      "A modern news application using REST APIs with category filters, search functionality and responsive user interface.",
    tech: ["React.js", "REST API", "Tailwind CSS"],
    github: "https://github.com/vikramofficial63/news-app.git",
    live: "https://new-web-app-vikram.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#050816] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[170px] rounded-full"></div>

      {/* Container */}
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center !pb-5"
        >
          <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
            Projects
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">
            Featured Work
          </h2>

          <p className="mt-6 max-w-full mx-auto text-gray-400 leading-8">
            A collection of premium web applications built using React.js,
            JavaScript and Tailwind CSS with clean UI, responsive layouts and
            modern animations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 mt-20">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/40 transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-4">

                <h3 className="text-2xl font-bold text-white !pt-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-full border border-white/10 py-3 text-white hover:bg-white/10 transition"
                  >
                    <FaGithub />
                    Github
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-white hover:bg-blue-500 transition"
                  >
                    Live Demo
                    <HiOutlineArrowTopRightOnSquare />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;