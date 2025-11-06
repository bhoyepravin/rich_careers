import React from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowUp,
  HiExternalLink,
  HiHeart,
} from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Press Kit"],
    },
    {
      title: "Services",
      links: [
        "Web Development",
        "Mobile Apps",
        "Cloud Solutions",
        "AI Services",
      ],
    },
    {
      title: "Support",
      links: ["Help Center", "Documentation", "API Status", "Contact Us"],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: "💼", color: "hover:text-blue-600" },
    { name: "GitHub", icon: "💻", color: "hover:text-gray-700" },
    { name: "Dribbble", icon: "🎨", color: "hover:text-pink-500" },
  ];

  return (
    <footer className="bg-bunting text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-catalina-blue/80 to-denim/80"></div>

        {/* Pattern Dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cerulean rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cerulean rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cerulean rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-cerulean rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-catalina-blue font-bold text-lg">CT</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Catalina Tech
              </span>
            </motion.div>

            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Building innovative digital solutions that transform businesses
              and create exceptional user experiences.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl transition-colors ${social.color} hover:bg-white/30 backdrop-blur-sm`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                {section.title}
                <div className="w-2 h-2 bg-cerulean rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{
                      x: 5,
                      color: "#11a6d7",
                    }}
                    className="block text-blue-100 hover:text-cerulean transition-colors duration-300 group text-lg"
                  >
                    <span className="flex items-center gap-2">
                      {link}
                      <HiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              Contact
              <div className="w-2 h-2 bg-cerulean rounded-full"></div>
            </h4>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-blue-100"
              >
                <div className="w-12 h-12 bg-cerulean/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <HiMail className="text-cerulean text-xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Email</p>
                  <p className="text-blue-100">hello@catalinatech.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-blue-100"
              >
                <div className="w-12 h-12 bg-cerulean/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <HiPhone className="text-cerulean text-xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Phone</p>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-blue-100"
              >
                <div className="w-12 h-12 bg-cerulean/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <HiLocationMarker className="text-cerulean text-xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Office</p>
                  <p className="text-blue-100">123 Tech Street</p>
                  <p className="text-blue-100">Digital City</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-cerulean/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-blue-100 text-lg">
            <span>© {currentYear} Catalina Tech. All rights reserved.</span>
            <HiHeart className="text-cerulean animate-pulse" />
          </div>

          <div className="flex items-center gap-6 text-blue-100 text-lg">
            <motion.a
              href="#"
              whileHover={{ color: "#11a6d7" }}
              className="hover:text-cerulean transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#11a6d7" }}
              className="hover:text-cerulean transition-colors"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#11a6d7" }}
              className="hover:text-cerulean transition-colors"
            >
              Cookies
            </motion.a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#11a6d7",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-cerulean p-4 rounded-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
          >
            <HiArrowUp className="text-white text-xl" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
