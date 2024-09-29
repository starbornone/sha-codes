import React, { Fragment, useMemo } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NAVIGATION_ITEMS = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
];

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Logo = () => (
  <div className="text-lg text-oasis-500 flex gap-2 items-center">
    <div className="sr-only">Sha Codes</div>
    <div className="text-oasis-500">
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M405.1 .8c-8.4-2.8-17.4 1.7-20.2 10.1l-160 480c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1l160-480c2.8-8.4-1.7-17.4-10.1-20.2zM172 117.4c-5.9-6.6-16-7.2-22.6-1.3l-144 128C2 247.1 0 251.4 0 256s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L40.1 256 170.6 140c6.6-5.9 7.2-16 1.3-22.6zm296.1 0c-5.9 6.6-5.3 16.7 1.3 22.6L599.9 256 469.4 372c-6.6 5.9-7.2 16-1.3 22.6s16 7.2 22.6 1.3l144-128c3.4-3 5.4-7.4 5.4-12s-2-8.9-5.4-12l-144-128c-6.6-5.9-16.7-5.3-22.6 1.3z" />
      </svg>
    </div>
    <div>
    sha<span className="text-grey-100">.codes</span>
    </div>
  </div>
);

const NavigationLinks = () => (
  <>
    {NAVIGATION_ITEMS.map((item, index) => (
      <Link
        key={item.name}
        to={item.href}
        smooth
        spy
        duration={500}
        offset={-80}
        activeClass="active"
      >
        <span className="font-mono text-xs font-normal text-oasis-500">
          0{index + 1}.
        </span>{' '}
        {item.name}
      </Link>
    ))}
  </>
);

const Nav = () => {
  const navItems = useMemo(() => <NavigationLinks />, []);

  return (
    <Popover as="header" className="sticky top-0 z-10">
      <div className="px-2 py-6 bg-grey-900 md:px-6 3xl:px-12">
        <nav className="relative flex items-center justify-between">
          <div className="flex items-center flex-1">
            <Logo />
            <div className="flex items-center -mr-2 md:hidden">
              <Popover.Button
                className="inline-flex items-center justify-center p-2 rounded-md bg-grey-900 text-greyish-400 hover:bg-grey-800 focus:outline-none"
                aria-label="Open main menu"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h416c8.8 0 16 7.2 16 16z" />
                </svg>
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navItems}
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top transform md:hidden"
        >
          <div className="overflow-hidden rounded-lg shadow-md bg-gradient-to-r from-oasis-800 to-grey-500">
            <div className="flex items-center justify-between px-5 pt-4">
              <Logo />
              <Popover.Button
                className="inline-flex items-center justify-center p-2 rounded-md text-oasis-800 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z" />
                </svg>
              </Popover.Button>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                <motion.ul variants={variants}>
                  {navItems}
                </motion.ul>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Nav;
