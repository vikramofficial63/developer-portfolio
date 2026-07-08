import React from 'react'
import Navbar from '../components/common/Navbar';
import Hero from '../sections/Hero';
import About  from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
    </>
  );
};

export default Home