import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiUser,
  HiCalendar,
} from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "",
    dateOfBirth: "",
    gender: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      whatsappNumber: "",
      dateOfBirth: "",
      gender: "",
      location: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      title: "Email",
      detail: "hello@catalinatech.com",
      color: "text-cerulean",
    },
    {
      icon: <HiPhone className="text-2xl" />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      color: "text-denim",
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      title: "Office",
      detail: "123 Tech Street, Digital City",
      color: "text-catalina-blue",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bunting mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us and let's create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-gray-100"
              >
                <div
                  className={`p-4 bg-white rounded-xl shadow-sm ${info.color}`}
                >
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-bunting mb-1">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.detail}</p>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-catalina-blue/5 to-denim/5 rounded-2xl p-6 border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-bunting mb-3">
                Why We Need Your Details
              </h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Better personalized service</li>
                <li>• Faster response times</li>
                <li>• Tailored solutions for your needs</li>
                <li>• Preferred communication method</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Personal Information Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <HiUser className="inline mr-2 text-cerulean" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <HiMail className="inline mr-2 text-cerulean" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Contact Numbers Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <HiPhone className="inline mr-2 text-cerulean" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="whatsappNumber"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <span className="text-green-500">📱</span>
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Personal Details Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <HiCalendar className="inline mr-2 text-cerulean" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-bunting mb-2"
                >
                  <HiUser className="inline mr-2 text-cerulean" />
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-bunting mb-2"
              >
                <HiLocationMarker className="inline mr-2 text-cerulean" />
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300"
                placeholder="City, Country"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-bunting mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cerulean focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
              />
            </div>

            {/* Privacy Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-4 border border-cerulean/20"
            >
              <p className="text-sm text-bunting text-center">
                🔒 Your information is secure and will only be used to provide
                you with better service.
              </p>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#083477",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-cerulean text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              Send Message
              <HiPaperAirplane className="text-lg" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
