import React, { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

import { nav } from '../data';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-scroll';
import { RiBarChartHorizontalLine, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white shadow-lg py-3' : 'py-5'
      } fixed left-0 right-0 z-50 transition-all duration-300`}
    >
      <ClickAwayListener onClickAway={() => setShowNav(false)}>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <Link
              to='home'
              className='cursor-pointer transition-all'
              smooth={true}
              duration={500}
            >
              <img src={Logo} alt=''></img>
            </Link>
            <ul
              className={`${
                showNav ? 'left-0' : '-left-full'
              } flex flex-col justify-center items-center bg-accent fixed top-0 text-white text-xl capitalize w-80 h-full gap-y-8 duration-200 transition-all`}
            >
              {nav.map((item, index) => {
                return (
                  <li className='cursor-pointer' key={index}>
                    <Link
                      onClick={() => setShowNav(!showNav)}
                      to={item.name}
                      activeClass='active'
                      smooth={true}
                      duration={500}
                      className='transition-all'
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div onClick={() => setShowNav(!showNav)}>
              {showNav ? (
                <RiCloseFill className='cursor-pointer w-8 h-8' />
              ) : (
                <RiBarChartHorizontalLine className='cursor-pointer w-8 h-8' />
              )}
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </header>
  );
};

export default Header;
