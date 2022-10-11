import React from 'react';

import { about } from '../data';

const About = () => {
  return (
    <section className='section relative' id='about'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {about.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle lg:mb-[60px]'>{about.subtitle}</p>
      </div>
    </section>
  );
};

export default About;
