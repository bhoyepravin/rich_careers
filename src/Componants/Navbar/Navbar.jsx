import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown, HiSearch, HiUser } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "#home",
      type: "link",
    },
    {
      name: "Services",
      href: "#services",
      type: "dropdown",
      items: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"],
    },
    {
      name: "Careers",
      href: "#roles",
      type: "link",
    },
    {
      name: "Contact",
      href: "#contact",
      type: "link",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-2xl border-b border-catalina-blue/10"
          : "bg-catalina-blue"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-2xl ${
                scrolled
                  ? "bg-gradient-to-br from-catalina-blue to-denim"
                  : "bg-white"
              } flex items-center justify-center shadow-lg`}
            >
              <span
                className={`font-bold ${
                  scrolled ? "text-white" : "text-catalina-blue"
                }`}
              >
                CT
              </span>
            </div>
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-catalina-blue" : "text-white"
              }`}
            >
              Catalina Tech
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.type === "dropdown" ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-1 font-semibold transition-colors ${
                        scrolled
                          ? "text-bunting hover:text-cerulean"
                          : "text-white hover:text-blue-100"
                      }`}
                    >
                      {item.name}
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiChevronDown />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-cerulean/20 p-4"
                        >
                          {item.items.map((subItem) => (
                            <motion.a
                              key={subItem}
                              href="#"
                              whileHover={{ x: 5, color: "#11a6d7" }}
                              className="block py-2 px-3 text-bunting hover:text-cerulean rounded-lg hover:bg-cerulean/5 transition-all duration-200"
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.a
                    href={item.href}
                    whileHover={{
                      scale: 1.05,
                      color: scrolled ? "#11a6d7" : "#a5d8ff",
                    }}
                    className={`font-semibold transition-colors ${
                      scrolled
                        ? "text-bunting hover:text-cerulean"
                        : "text-white hover:text-blue-100"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-xl ${
                scrolled
                  ? "text-bunting hover:bg-cerulean/10"
                  : "text-white hover:bg-white/20"
              } transition-colors`}
            >
              <HiSearch className="text-xl" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cerulean text-white px-6 py-2 rounded-full font-semibold hover:bg-denim transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden text-2xl ${
              scrolled ? "text-catalina-blue" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white rounded-2xl shadow-2xl border border-cerulean/20 overflow-hidden mt-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.type === "dropdown" ? (
                    <div className="border-b border-gray-100">
                      <button className="w-full text-left px-6 py-4 text-bunting font-semibold flex items-center justify-between hover:bg-cerulean/5 transition-colors">
                        {item.name}
                        <HiChevronDown />
                      </button>
                      <div className="bg-gray-50 pl-8">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block py-3 px-4 text-bunting hover:text-cerulean border-b border-gray-100 last:border-b-0 hover:bg-white transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-6 py-4 text-bunting font-semibold border-b border-gray-100 hover:bg-cerulean/5 hover:text-cerulean transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}

              <div className="p-4 border-t border-gray-100">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-cerulean text-white py-3 rounded-xl font-semibold hover:bg-denim transition-colors shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
