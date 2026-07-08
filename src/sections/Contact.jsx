import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#070b16]"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center !pb-5">

          <p className="uppercase tracking-[5px] text-blue-500 font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white !pb-5">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Looking for a React.js Developer or Frontend Developer?
            I'm available for full-time remote opportunities and freelance projects.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mt-20">

          {/* Left */}
          <div className="!space-y-8">

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <h3 className="mt-1 text-white font-semibold">
                  vikramofficial63@gmail.com
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <h3 className="mt-1 text-white font-semibold">
                  +91 XXXXX XXXXX
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <h3 className="mt-1 text-white font-semibold">
                  Bhopal, Madhya Pradesh
                </h3>
              </div>
            </div>

            <div className="flex gap-5 !pt-6">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </a>
            </div>

          </div>

          {/* Right - FORM (WEB3FORMS) */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="!space-y-6"
          >

            {/* Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="06a8609b-e1da-485a-9b59-8256485fadd7"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;