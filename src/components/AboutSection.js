import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const windowHeight = window.innerHeight;
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const sectionBottom = aboutSection.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight * 0.8 && sectionBottom > 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className={`about ${animate ? 'animate' : ''}`} ref={aboutRef}>
      <div className={`about__content ${animate ? 'animate' : ''}`}>
        <h2>About Me</h2>
       
      </div>
    </section>
  );
};

export default AboutSection;
