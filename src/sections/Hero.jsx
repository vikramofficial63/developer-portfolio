import { HiArrowLongRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../utils/animations";

const Hero = () => {
  return (
 <section
  id="hero"
  className="relative overflow-hidden bg-[#050816] min-h-screen pt-28 lg:pt-0"
>     {/* Glow */}

      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

<div className="container mx-auto px-5 lg:px-8">

<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 min-h-[calc(100vh-120px)]">
          {/* LEFT */}

<section
  id="hero"
  className="relative overflow-hidden bg-[#050816] pt-32 lg:pt-24 pb-20"
>
  {/* Background Glow */}

  <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[180px]" />

  <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

  {/* Container */}

  <div className="container">

<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-70 lg:pt-0">
      {/* ================= LEFT ================= */}

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 pt-10 lg:pt-0 text-center lg:text-left"
      >

        <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-400">
          🚀 Available For Freelancing
        </span>

        <h1 className="mt-6 font-black leading-none">

          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Building Modern
          </span>

          <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent">
            Web Experiences
          </span>

        </h1>

        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
          Hi, I'm <span className="text-blue-500">Vikram Dangi</span>
        </h2>

        <p className="mx-auto lg:mx-0 mt-6 max-w-xl text-gray-400 leading-8 text-base lg:text-lg">
          Frontend Developer specializing in React.js, JavaScript and
          Tailwind CSS. I build modern, responsive and high-performance
          websites with clean UI and smooth animations.
        </p>

        {/* Buttons */}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <a
            href="#projects"
            className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            View Projects

            <HiArrowLongRight
              size={22}
              className="transition group-hover:translate-x-2"
            />
          </a>

          <a
  href="https://res.cloudinary.com/dmpefjyhw/raw/upload/v1783949743/Vikram_Dangi_React_Developer_Resume_x40jab.docx"
  className="relative z-50 cursor-pointer rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-blue-500 hover:bg-blue-500/10"
>
  Download Resume
</a>

        </div>

        {/* Social */}

        <div className="!mt-3 !mb-3 flex justify-center lg:justify-start gap-4">

          <a
            href="https://github.com/vikramofficial63"
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:bg-blue-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vikram-dangi-56aa62284?utm_source=share_via&utm_content=profile&utm_medium=member_ios&original_referer="
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl transition hover:bg-blue-600"
          >
            <FaLinkedinIn />
          </a>

        </div>

        {/* Stats */}

        <div className="mt-12 flex gap-4">

          {[
            ["2+", "Years"],
            ["25+", "Projects"],
            ["100%", "Support"],
          ].map(([num, title]) => (

            <div
              key={title}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-5 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-black text-white">
                {num}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {title}
              </p>

            </div>

          ))}

        </div>

      </motion.div>

      {/* RIGHT STARTS HERE IN PART 2 */}
    </div>

  </div>

</section>

                {/* ================= RIGHT ================= */}

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative">

          {/* Glow */}

          <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-[120px]"></div>

          {/* Main Card */}

          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0B1224] to-[#050816] p-4 shadow-2xl shadow-blue-600/20">

            {/* Browser Bar */}

            <div className="mb-4 flex gap-2">

              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>

            </div>

            {/* Image */}

            <img
              src="https://res.cloudinary.com/dmpefjyhw/image/upload/v1783948054/IMG_2246_ldiihb_g8k5qv.webp"
              alt="Vikram Dangi"
              className="w-[280px] sm:h-[420px]
    md:h-[500px] lg:h-[750px] sm:w-[360px] lg:w-[430px] rounded-[24px] object-cover"
            />

          </div>

          {/* Left Badge */}

          <div className="hidden lg:flex absolute -left-14 bottom-10 items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/90 px-5 py-4 backdrop-blur-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl">
              🚀
            </div>

            <div>

              <h4 className="font-bold text-white">
                React Developer
              </h4>

              <p className="text-sm text-gray-400">
                Frontend Specialist
              </p>

            </div>

          </div>

          {/* Right Badge */}

          <div className="hidden lg:block absolute -right-10 top-12 rounded-2xl border border-white/10 bg-[#111827]/90 px-6 py-4 backdrop-blur-xl">

            <h3 className="text-3xl font-black text-blue-500">
              25+
            </h3>

            <p className="text-sm text-gray-400">
              Completed Projects
            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>
  );
};

export default Hero;