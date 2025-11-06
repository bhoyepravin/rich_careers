import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight, HiPlay } from "react-icons/hi";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      company: "TechInnovate Inc.",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Catalina Tech transformed our e-commerce platform with their exceptional web development skills. The team was professional, communicative, and delivered beyond our expectations.",
      videoUrl: "#",
      project: "E-commerce Platform",
      duration: "3 months",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, HealthTech Solutions",
      company: "HealthTech Solutions",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The mobile app developed by Catalina Tech has revolutionized how our patients interact with our services. The user experience is seamless and the performance is outstanding.",
      videoUrl: "#",
      project: "Healthcare Mobile App",
      duration: "4 months",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager, FinServe",
      company: "FinServe Corporation",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "Working with Catalina Tech on our cloud migration was a game-changer. Their expertise in cloud solutions saved us time and money while improving our system reliability.",
      videoUrl: "#",
      project: "Cloud Infrastructure",
      duration: "6 months",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder, EduTech Pro",
      company: "EduTech Pro",
      image: "/api/placeholder/100/100",
      rating: 5,
      text: "The AI integration provided by Catalina Tech has significantly improved our platform's capabilities. Their innovative approach and technical expertise are truly impressive.",
      videoUrl: "#",
      project: "AI Learning Platform",
      duration: "5 months",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <HiStar
            key={i}
            className={`text-lg ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 bg-cerulean/10 text-cerulean px-6 py-2 rounded-full mb-4"
          >
            <span className="text-xl">💬</span>
            <span className="font-semibold">Client Stories</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-bunting mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses we've helped
            transform with our technology solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl border border-cerulean/20"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div>
                    <div className="text-4xl text-cerulean mb-6">"</div>

                    <p className="text-2xl md:text-3xl font-light text-bunting mb-6 leading-relaxed">
                      {testimonials[activeTestimonial].text}
                    </p>

                    <div className="space-y-4">
                      <StarRating
                        rating={testimonials[activeTestimonial].rating}
                      />

                      <div>
                        <h4 className="text-xl font-bold text-bunting">
                          {testimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-cerulean font-semibold">
                          {testimonials[activeTestimonial].position}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[activeTestimonial].company}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                        <div className="bg-cerulean/10 text-cerulean px-4 py-2 rounded-full text-sm font-semibold">
                          Project: {testimonials[activeTestimonial].project}
                        </div>
                        <div className="bg-denim/10 text-denim px-4 py-2 rounded-full text-sm font-semibold">
                          Duration: {testimonials[activeTestimonial].duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Thumbnail */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <div className="aspect-video bg-gradient-to-br from-catalina-blue to-denim flex items-center justify-center">
                      <div className="text-center text-white">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="w-20 h-20 bg-cerulean rounded-full flex items-center justify-center shadow-2xl mb-4"
                        >
                          <HiPlay className="text-white text-2xl ml-1" />
                        </motion.button>
                        <p className="text-lg font-semibold">
                          Watch Video Testimonial
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#083477" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cerulean text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HiChevronLeft className="text-xl" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#083477" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cerulean text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <HiChevronRight className="text-xl" />
            </motion.button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-cerulean scale-125"
                    : "bg-gray-300 hover:bg-cerulean/50"
                }`}
              />
            ))}
          </div>

          {/* Additional Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === activeTestimonial ? "ring-2 ring-cerulean" : ""
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 my-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-catalina-blue to-denim rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-bunting">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-catalina-blue to-denim rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Become Our Next Success Story?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their
                businesses with our technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#11a6d7" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cerulean text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "white" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-catalina-blue px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
