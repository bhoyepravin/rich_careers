import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import JobRoles from "./JobRoles";
import Contact from "./Contact";
import ServicesVideos from "./ServicesVideos";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <JobRoles />
      <ServicesVideos />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
