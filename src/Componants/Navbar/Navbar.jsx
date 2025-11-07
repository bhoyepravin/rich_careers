import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiSearch,
  HiSparkles,
} from "react-icons/hi";
import { logo } from "../../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

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
      icon: "🚀",
    },
    {
      name: "Services",
      href: "#services",
      type: "dropdown",
      items: ["Web Development", "Mobile Apps", "Cloud Solutions", "AI & ML"],
      icon: "💫",
    },
    {
      name: "Careers",
      href: "#roles",
      type: "link",
      icon: "🌟",
    },
    {
      name: "Contact",
      href: "#contact",
      type: "link",
      icon: "📱",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-catalina-blue/5"
          : "bg-catalina-blue"
      }`}
    >
      {/* Animated Background Effect */}
      {!scrolled && (
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #11a6d7 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #147ac7 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #083477 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #11a6d7 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}

      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center py-3">
          {/* Logo with Creative Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              className={`relative w-15 h-15 rounded-2xl ${
                scrolled
                  ? "bg-gradient-to-br from-catalina-blue to-denim shadow-lg"
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              } flex items-center justify-center overflow-hidden`}
              whileHover={{ rotate: 5 }}
            >
              {/* Animated background effect in logo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cerulean/20 to-denim/20"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Logo Image */}
              <img
                src={logo} // Update this path to your actual logo file
                alt="Catalina Innovations Logo"
                className="w-8 h-8 object-contain relative z-10"
              />

              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <HiSparkles
                  className={`text-xs ${
                    scrolled ? "text-cerulean" : "text-white"
                  }`}
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col">
              <span
                className={`text-2xl font-black tracking-tight ${
                  scrolled ? "text-catalina-blue" : "text-white"
                }`}
              ></span>
              <motion.span
                className={`text-sm font-medium ${
                  scrolled ? "text-cerulean" : "text-denim"
                } tracking-wider`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              ></motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation with Creative Hover Effects */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.name);
                  setActiveDropdown(item.name);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setActiveDropdown(null);
                }}
              >
                {item.type === "dropdown" ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className={`relative flex items-center gap-2 font-semibold px-4 py-2 rounded-2xl transition-all duration-300 ${
                        scrolled
                          ? "text-bunting hover:text-cerulean hover:bg-cerulean/5"
                          : "text-white hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="text-sm">{item.icon}</span>
                      {item.name}
                      <motion.div
                        animate={{
                          rotate: activeDropdown === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiChevronDown />
                      </motion.div>

                      {/* Hover underline effect */}
                      <motion.div
                        className={`absolute bottom-0 left-4 right-4 h-0.5 ${
                          scrolled ? "bg-cerulean" : "bg-white"
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cerulean/20 p-4 z-50"
                        >
                          <div className="grid gap-2">
                            {item.items.map((subItem, subIndex) => (
                              <motion.a
                                key={subItem}
                                href="#"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                                whileHover={{
                                  x: 8,
                                  backgroundColor: "rgba(17, 166, 215, 0.1)",
                                }}
                                className="flex items-center gap-3 py-3 px-4 text-bunting hover:text-cerulean rounded-xl transition-all duration-200 group"
                              >
                                <div className="w-2 h-2 bg-cerulean rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="font-medium">{subItem}</span>
                                <motion.div
                                  className="ml-auto opacity-0 group-hover:opacity-100"
                                  whileHover={{ x: 3 }}
                                >
                                  <HiChevronDown className="text-cerulean rotate-270" />
                                </motion.div>
                              </motion.a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    className={`relative flex items-center gap-2 font-semibold px-4 py-2 rounded-2xl transition-all duration-300 ${
                      scrolled
                        ? "text-bunting hover:text-cerulean hover:bg-cerulean/5"
                        : "text-white hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    {item.name}

                    {/* Hover underline effect */}
                    <motion.div
                      className={`absolute bottom-0 left-4 right-4 h-0.5 ${
                        scrolled ? "bg-cerulean" : "bg-white"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredItem === item.name ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons with Creative Design */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-2xl transition-all duration-300 ${
                scrolled
                  ? "text-bunting hover:bg-cerulean/10 hover:text-cerulean hover:shadow-lg"
                  : "text-white hover:bg-white/20 hover:shadow-lg"
              }`}
            >
              {/* <HiSearch className="text-xl" /> */}
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                background:
                  "linear-gradient(135deg, #11a6d7 0%, #147ac7 50%, #083477 100%)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-cerulean to-denim text-white px-8 py-3 rounded-2xl font-bold shadow-2xl hover:shadow-cerulean/25 transition-all duration-300 overflow-hidden group"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-denim to-cerulean opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    "linear-gradient(135deg, #11a6d7 0%, #147ac7 50%, #083477 100%)",
                    "linear-gradient(135deg, #083477 0%, #11a6d7 50%, #147ac7 100%)",
                    "linear-gradient(135deg, #11a6d7 0%, #147ac7 50%, #083477 100%)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute top-0 -left-10 w-8 h-full bg-white/20 skew-x-12"
                animate={{ x: [0, 400] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🚀
                </motion.span>
              </span>
            </motion.button>
          </div>

          {/* Creative Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95, rotate: 90 }}
            className={`lg:hidden text-2xl p-2 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "text-catalina-blue hover:bg-cerulean/10"
                : "text-white hover:bg-white/20"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
              >
                <HiX />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
              >
                <HiMenu />
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Creative Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-cerulean/20 overflow-hidden mt-4"
            >
              <div className="p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.type === "dropdown" ? (
                      <div className="border-b border-cerulean/10">
                        <button className="w-full text-left px-4 py-4 text-bunting font-bold flex items-center justify-between hover:bg-cerulean/5 hover:text-cerulean rounded-2xl transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            {item.name}
                          </div>
                          <HiChevronDown className="text-cerulean" />
                        </button>
                        <div className="bg-cerulean/5 rounded-2xl ml-8 my-2">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block py-3 px-6 text-bunting hover:text-cerulean border-b border-cerulean/10 last:border-b-0 hover:bg-cerulean/10 rounded-xl transition-colors"
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
                        className="flex items-center gap-3 px-4 py-4 text-bunting font-bold border-b border-cerulean/10 hover:bg-cerulean/5 hover:text-cerulean rounded-2xl transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}

                <div className="p-4 border-t border-cerulean/10 mt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cerulean to-denim text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started 🚀
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
