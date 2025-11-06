import React from "react";
import { motion } from "framer-motion";
import { HiBriefcase, HiLocationMarker } from "react-icons/hi";

const JobRoles = () => {
  const roles = [
    {
      title: "Frontend Developer",
      tech: "React, Vue, Angular",
      type: "Remote",
      icon: "💻",
    },
    {
      title: "Backend Engineer",
      tech: "Node.js, Python, Java",
      type: "Hybrid",
      icon: "⚙️",
    },
    {
      title: "UX/UI Designer",
      tech: "Figma, Adobe Suite",
      type: "On-site",
      icon: "🎨",
    },
    {
      title: "DevOps Engineer",
      tech: "AWS, Docker, Kubernetes",
      type: "Remote",
      icon: "☁️",
    },
  ];

  return (
    <section
      id="roles"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bunting mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore exciting career opportunities and be part of our innovative
            team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(17, 166, 215, 0.05)",
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-cerulean/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{role.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-bunting">
                      {role.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{role.tech}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <HiLocationMarker className="text-cerulean" />
                  <span>{role.type}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-cerulean text-white rounded-full text-sm font-medium hover:bg-denim transition-colors"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#083477",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-cerulean text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JobRoles;
