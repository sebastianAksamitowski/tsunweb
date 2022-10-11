import React from 'react';

import Egoina from '../assets/img/Egoina.png';
import { RiMessage2Fill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      className='pt-[100px] bg-heroText bg-contain bg-no-repeat bg-center lg:bg-top'
      id='home'
    >
      <div className='container mx-auto xl:px-[100px]'>
        <div className='lg:flex text-center lg:text-left'>
          <div className='flex-1 lg:max-w-[558px] mt-12'>
            <h3 className='text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[20px]'>
              Hello, I'm
            </h3>
            <h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5 tracking-tighter'>
              tsun<span className='text-black'>web</span>
            </h2>
            <h1 className='text-[60px] md:text-[75px] lg:text-[90px] leading-none font-semibold mb-6 tracking-tighter'>
              Frontend <br />
              <span className='lg:pl-[50px]'>Developer</span>
              <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span>
            </h1>
            <p className='mb-[35px] text-lg lg:text-xl text-center lg:text-left'>
              Programmers are the <br />
              architects of the present world...
            </p>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              offset={-20}
              className='transition-all'
            >
              <button className='btn bg-accent mx-auto lg:mx-0 mb-6 shadow-xl shadow-[#fd59566b] relative z-10'>
                Contact me
                <span className='text-xl ml-3'>
                  <RiMessage2Fill />
                </span>
              </button>
            </Link>
          </div>
          <div className='flex-1 flex justify-center lg:justify-end relative xl:after:w-96 xl:after:h-96 xl:after:block xl:after:absolute xl:after:top-2/4 xl:after:-left-96'>
            <img className='z-20' src={Egoina} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
