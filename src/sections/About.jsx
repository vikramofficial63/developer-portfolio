const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#070b16]"
    >
      <div className="container pt-24 pb-24 lg:pt-32 lg:pb-32">

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* CONTENT */}

          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">

            <span className="text-blue-500 uppercase tracking-[4px] text-sm font-semibold">
              About Me
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Passionate Frontend Developer Creating Premium Web Experiences
            </h2>

            <p className="mt-6 text-gray-400 leading-8 text-sm sm:text-base lg:text-lg">
              I'm Vikram Dangi, a passionate React.js Frontend Developer with
              around 2 years of freelancing experience. I enjoy building
              modern, responsive and high-performance web applications with a
              strong focus on clean UI, smooth animations and excellent user
              experience.
            </p>

            <p className="mt-5 text-gray-400 leading-8 text-sm sm:text-base lg:text-lg">
              Along with frontend development, I also have experience creating
              premium portfolio websites, landing pages and business websites
              using React.js, JavaScript and Tailwind CSS.
            </p>

            {/* Skills */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                ⚡ React.js
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                ⚡ JavaScript
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                ⚡ Tailwind CSS
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                ⚡ Responsive UI
              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative flex justify-center w-full lg:w-1/2 order-2 lg:order-1">

            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>

            <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0B1224] to-[#050816] p-4 shadow-2xl shadow-blue-600/20">

              <img
                src="/profile.png.png"
                alt="Vikram Dangi"
                className="w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto rounded-[24px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;