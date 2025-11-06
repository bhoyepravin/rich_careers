import React from "react";
import { motion } from "framer-motion";
import { HiCode, HiDeviceMobile, HiCloud, HiShieldCheck } from "react-icons/hi";

const Services = () => {
  const services = [
    {
      icon: <HiCode className="text-4xl" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices for optimal performance.",
      color: "from-catalina-blue to-denim",
    },
    {
      icon: <HiDeviceMobile className="text-4xl" />,
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
      color: "from-cerulean to-denim",
    },
    {
      icon: <HiCloud className="text-4xl" />,
      title: "Cloud Services",
      description:
        "Scalable cloud infrastructure and migration services for businesses of all sizes.",
      color: "from-denim to-cerulean",
    },
    {
      icon: <HiShieldCheck className="text-4xl" />,
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets and customer data.",
      color: "from-catalina-blue to-cerulean",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bunting mb-4">
            What We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business
            needs and drive digital transformation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-bunting mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
