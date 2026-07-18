const About = () => {
  return (
    <section id="about" className="relative bg-[#070b16]">
      <div className="container pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* CONTENT */}

          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">

            <span className="text-blue-500 uppercase tracking-[4px] text-sm font-semibold">
              About Me
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Passionate Full Stack MERN Developer Building Modern Web Applications
            </h2>

            <p className="mt-6 text-gray-400 leading-8 text-sm sm:text-base lg:text-lg">
              I'm Vikram Dangi, a Full Stack MERN Developer with 2+ years of
              freelancing experience building modern, scalable and
              high-performance web applications. I specialize in React.js,
              Node.js, Express.js and MongoDB while focusing on clean code,
              responsive UI, secure backend APIs and exceptional user
              experiences.
            </p>

            <p className="mt-5 text-gray-400 leading-8 text-sm sm:text-base lg:text-lg">
              During my freelancing journey, I've successfully developed and
              deployed production-ready projects including a Full Stack MERN
              Ecommerce Platform, a modern News Web Application, premium
              portfolio websites and responsive business websites. I also have
              hands-on experience with REST APIs, Authentication, CRUD
              Operations, Git & GitHub, MongoDB Atlas, Cloudinary, Render and
              Netlify deployment.
            </p>

            {/* Skills */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                ⚛️ React.js
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                🚀 Node.js
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                ⚡ Express.js
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                🍃 MongoDB
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                🎨 Tailwind CSS
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                🔗 REST APIs
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                💻 Git & GitHub
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:border-blue-500 hover:bg-blue-500/10">
                ☁️ Cloudinary • Render • Netlify
              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="relative flex justify-center w-full lg:w-1/2 order-2 lg:order-1">

            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>

            <div className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0B1224] to-[#050816] p-4 shadow-2xl shadow-blue-600/20">

              <img
                src="https://res.cloudinary.com/dmpefjyhw/image/upload/v1783948054/IMG_2246_ldiihb_g8k5qv.webp"
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