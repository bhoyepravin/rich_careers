import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-bunting mb-6"
            >
              Innovating <span className="text-cerulean">Tomorrow's</span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We create cutting-edge technology solutions that drive business
              growth and digital transformation for the modern era.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#083477",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-cerulean text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:shadow-lg transition-all duration-300"
            >
              Get Started
              <HiArrowRight className="text-lg" />
            </motion.button>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* Floating shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-20 h-20 bg-denim/20 rounded-full blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-10 right-10 w-16 h-16 bg-cerulean/20 rounded-full blur-xl"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-catalina-blue/10 to-cerulean/10 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl text-cerulean"
                >
                  🚀
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
