const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <h2 className="text-white font-bold text-xl">

          Vikram<span className="text-blue-500">.</span>

        </h2>

        <p className="text-gray-400 text-sm text-center">

          © {new Date().getFullYear()} Vikram Dangi.
          All Rights Reserved.

        </p>

      </div>

    </footer>
  );
};

export default Footer;