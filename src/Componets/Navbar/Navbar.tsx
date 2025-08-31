import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("/");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/#about" },
    { name: "Expertise", path: "/#expertise" },
    { name: "Testimonial", path: "/#testimonial" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-white/70 via-white/60 to-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Branding */}
        <Link to="/" className="group" onClick={() => setActiveLink("/")}>
          <span className="text-2xl font-extrabold tracking-wide text-gray-900">
            Sazzadur{" "}
            <span className="bg-gradient-to-r from-pink-500 to-red-600 bg-clip-text text-transparent">
              Rahman
            </span>{" "}
            Sakib
          </span>
          <div className="h-0.5 w-0 bg-gradient-to-r from-pink-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className={`relative group text-lg font-semibold text-gray-700 hover:text-red-600 transition duration-300 cursor-pointer
                ${activeLink === link.path ? "bg-gradient-to-r from-pink-100/50 to-red-100/50 rounded-full px-2 py-1" : ""}
              `}
            >
              <HashLink to={link.path} smooth onClick={() => setActiveLink(link.path)}>
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              </HashLink>
            </li>
          ))}

          {/* Desktop CTA */}
          <li>
            <HashLink
              to="/#contact"
              smooth
              onClick={() => setActiveLink("/#contact")}
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Hire Me
            </HashLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-900 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-200 animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors duration-300 w-full text-center
                  ${activeLink === link.path ? "bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full" : ""}
                `}
              >
                <HashLink
                  to={link.path}
                  smooth
                  onClick={() => handleLinkClick(link.path)}
                  className="block w-full py-2"
                >
                  {link.name}
                </HashLink>
              </li>
            ))}

            {/* Mobile CTA */}
            <li>
              <HashLink
                to="/#contact"
                smooth
                onClick={() => handleLinkClick("/#contact")}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Hire Me
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
