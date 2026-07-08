import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* ================= Header ================= */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050816]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,.35)]"
            : "bg-transparent"
        }`}
      >
<div className="max-w-7xl mx-auto h-20 px-6 xl:px-0 flex items-center justify-between">
          
          {/* Logo */}

          <a
            href="#hero"
            className="text-3xl md:text-4xl font-black tracking-tight text-white transition duration-300 hover:scale-105"
          >
            Vikram
            <span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}

          <nav className="hidden lg:flex items-center gap-9 xl:gap-11">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                className="relative text-[15px] font-medium text-gray-300 transition-all duration-300 hover:text-white group"
              >
                {item.name}

                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ))}

          </nav>

          {/* Desktop Button */}

         <a
  href="#contact"
  className="hidden lg:inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-[15px] font-semibold tracking-wide shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-blue-500/60"
>
  Hire Me
</a>
          {/* Mobile Menu */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white backdrop-blur-xl transition-all duration-300 hover:border-blue-500 hover:bg-blue-600/20"
          >
            {open ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>

        </div>
      </header>

      {/* ================= Overlay ================= */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>

      {/* ================= Mobile Drawer ================= */}

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[82%] max-w-sm border-l border-white/10 bg-[#08111f]/95 backdrop-blur-2xl transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Top */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-3xl font-black text-white">
            Vikram
            <span className="text-blue-500">.</span>
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-white/10"
          >
            <HiX className="text-white" size={28} />
          </button>

        </div>

        {/* Links */}

        <div className="space-y-5 px-6 py-8">

          {links.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-lg text-gray-300 transition-all duration-300 hover:translate-x-2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white"
            >
              {item.name}

              <span className="opacity-0 transition duration-300 group-hover:opacity-100">
                →
              </span>

            </a>

          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex justify-center rounded-full bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
          >
            Hire Me
          </a>

        </div>

      </aside>
    </>
  );
};

export default Navbar;