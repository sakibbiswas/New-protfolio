import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skils from '../Skils/Skils';
import Expertise from '../Expertise/Expertise';
import Project from '../Project/Project';
import Contact from '../Conatct/Conatct';
import Testimonial from '../Testimonial/Testimonial';
import Hire from '../Hire/Hire';
import BlogSection from '../Blog/BlogSection';
import Education from '../Education/Education';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Education/>
      <About />
      <Skils/>
      <Expertise />
      <Project />
      <Testimonial />
      <Hire />
      <Contact />
      <BlogSection/>
    </div>
  );
};

export default Home;
