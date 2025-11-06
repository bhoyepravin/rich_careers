import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlay, HiX, HiCloudUpload, HiVideoCamera } from "react-icons/hi";

const ServicesVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const videoCategories = [
    { id: "all", name: "All Services" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "cloud", name: "Cloud Solutions" },
    { id: "ai", name: "AI & ML" },
  ];

  const serviceVideos = [
    {
      id: 1,
      title: "Web Development Process",
      description: "See how we build responsive and scalable web applications",
      category: "web",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "2:45",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Our approach to creating cross-platform mobile applications",
      category: "mobile",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "3:20",
    },
    {
      id: 3,
      title: "Cloud Migration Strategy",
      description: "Learn about our cloud infrastructure solutions",
      category: "cloud",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "4:15",
    },
    {
      id: 4,
      title: "AI Integration Demo",
      description: "How we implement AI solutions in business applications",
      category: "ai",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "5:30",
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "End-to-end development process showcase",
      category: "web",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "3:45",
    },
    {
      id: 6,
      title: "DevOps Implementation",
      description: "Our DevOps and CI/CD pipeline setup",
      category: "cloud",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "#",
      duration: "4:50",
    },
  ];

  const filteredVideos =
    activeCategory === "all"
      ? serviceVideos
      : serviceVideos.filter((video) => video.category === activeCategory);

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
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
            <HiVideoCamera className="text-xl" />
            <span className="font-semibold">Service Showcase</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-bunting mb-4">
            Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how we transform ideas into powerful digital solutions through
            our development process
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {videoCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cerulean text-white shadow-lg"
                  : "bg-white text-bunting hover:bg-cerulean/10 hover:text-cerulean shadow-md"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-catalina-blue to-denim relative">
                  {/* Placeholder for video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <HiPlay className="text-white text-2xl ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-cerulean text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {
                      videoCategories.find((cat) => cat.id === video.category)
                        ?.name
                    }
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-bunting mb-2 group-hover:text-cerulean transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-cerulean font-semibold hover:text-denim transition-colors"
                  >
                    <HiPlay className="text-lg" />
                    Watch Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-cerulean/20">
            <HiCloudUpload className="text-6xl text-cerulean mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-bunting mb-4">
              Want to See Your Project Here?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Upload your project requirements and we'll create a custom video
              showcase of how we can bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#083477" }}
              whileTap={{ scale: 0.95 }}
              className="bg-cerulean text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Upload Project Details
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-bunting">
                  {selectedVideo.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <HiX className="text-xl text-gray-600" />
                </motion.button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <HiVideoCamera className="text-6xl text-cerulean mx-auto mb-4" />
                  <p className="text-xl">Video Player Would Appear Here</p>
                  <p className="text-gray-400 mt-2">
                    Duration: {selectedVideo.duration}
                  </p>
                </div>
              </div>

              {/* Video Description */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-cerulean text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {
                      videoCategories.find(
                        (cat) => cat.id === selectedVideo.category
                      )?.name
                    }
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-catalina-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-denim transition-colors"
                  >
                    Start Similar Project
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesVideos;
