import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiArrowRight,
  HiPlay,
  HiSparkles,
  HiCode,
  HiCloud,
  HiChip,
} from "react-icons/hi";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotatingWords = ["Digital", "AI-Powered", "Cloud", "Future", "Smart"];
  const floatingShapes = ["🔮", "💫", "🚀", "🌌", "⚡", "🎯"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 0.02}px, ${
      mousePosition.y * 0.02
    }px)`,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cerulean/30 to-denim/30 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-catalina-blue/20 to-bunting/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#083477 1px, transparent 1px),
              linear-gradient(90deg, #083477 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-cerulean/20 rounded-full px-4 py-2 mb-8"
            >
              <HiSparkles className="text-cerulean animate-pulse" />
              <span className="text-sm font-semibold text-bunting">
                Future-Ready Solutions
              </span>
              <div className="w-2 h-2 bg-cerulean rounded-full animate-ping" />
            </motion.div>

            {/* Main Heading with Rotating Words */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mb-6"
            >
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-bunting leading-tight mb-4">
                Build{" "}
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-cerulean to-denim bg-clip-text text-transparent"
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </h1>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-bunting leading-tight">
                Experiences
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-bunting/80 mb-8 leading-relaxed font-medium"
            >
              We craft{" "}
              <span className="text-cerulean font-bold">
                immersive digital solutions
              </span>{" "}
              that transform ideas into revolutionary products for the next
              generation.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
            >
              {[
                { number: "200+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "99%", label: "Success" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-catalina-blue">
                    {stat.number}
                  </div>
                  <div className="text-sm text-bunting/60 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(135deg, #11a6d7 0%, #083477 100%)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-cerulean to-denim text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-cerulean/30 transition-all duration-300 flex items-center gap-3"
              >
                <span>Start Building</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="text-xl" />
                </motion.div>
                <div className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(17, 166, 215, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-cerulean text-cerulean px-8 py-4 rounded-2xl font-bold hover:bg-cerulean/10 transition-all duration-300 flex items-center gap-3"
              >
                <HiPlay className="text-lg" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
            style={parallaxStyle}
          >
            {/* Main Visual Container */}
            <div className="relative w-full h-[600px]">
              {/* Central Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cerulean via-denim to-catalina-blue rounded-full shadow-2xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [-360, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-6xl text-white"
                >
                  ⚡
                </motion.div>

                {/* Pulsing Rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: ring * 0.5,
                    }}
                    className="absolute inset-0 border-2 border-cerulean rounded-full"
                  />
                ))}
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: <HiCode />, position: "top-20 left-10", delay: 0 },
                { icon: <HiCloud />, position: "top-10 right-20", delay: 0.5 },
                { icon: <HiChip />, position: "bottom-20 left-20", delay: 1 },
                {
                  icon: <HiSparkles />,
                  position: "bottom-10 right-10",
                  delay: 1.5,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + item.delay, duration: 0.8 }}
                  className={`absolute ${item.position} w-16 h-16 bg-white/10 backdrop-blur-sm border border-cerulean/20 rounded-2xl flex items-center justify-center text-2xl text-cerulean shadow-lg`}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Floating Shapes */}
              {floatingShapes.map((shape, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(index) * 20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`absolute text-2xl ${
                    index % 2 === 0 ? "text-cerulean" : "text-denim"
                  }`}
                  style={{
                    top: `${20 + index * 12}%`,
                    left: `${10 + index * 15}%`,
                  }}
                >
                  {shape}
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                  d="M100,300 Q400,100 500,400"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#11a6d7" />
                    <stop offset="100%" stopColor="#083477" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-bunting/60 font-medium flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-cerulean rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-cerulean rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
