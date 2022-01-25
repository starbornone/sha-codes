import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCircleXmark,
  faCode,
} from '@fortawesome/pro-light-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
]

const Nav = () => {
  return (
    <Popover as="header" className="sticky top-0 z-10">
      <div className="bg-grey-900 py-6 px-2 md:px-6 3xl:px-12">
        <nav className="relative flex items-center justify-between 3xl:max-w-none">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="text-oasis-500 text-lg">
                <span className="sr-only">Sha Codes</span>
                <span className="text-oasis-500">
                  <FontAwesomeIcon className="mr-2" icon={faCode} size="lg" />
                </span>
                sha
                <span className="text-grey-100">.codes</span>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-grey-900 rounded-md p-2 inline-flex items-center justify-center text-greyish-400 hover:bg-grey-800 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <FontAwesomeIcon icon={faBars} />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item, index) => (
                <Link
                  activeClass="active"
                  duration={500}
                  key={item.name}
                  offset={-80}
                  smooth={true}
                  spy={true}
                  to={item.href}
                >
                  <span className="font-normal font-mono text-oasis-500 text-xs">
                    0{index + 1}.
                  </span>{' '}
                  {item.name}
                </Link>
              ))}
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
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-gradient-to-r from-oasis-800 to-grey-500 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div className="text-oasis-500 text-lg">
                <span className="sr-only">Sha Codes</span>
                <span className="text-oasis-500">
                  <FontAwesomeIcon className="mr-2" icon={faCode} size="lg" />
                </span>
                sha
                <span className="text-grey-100">.codes</span>
              </div>
              <div className="-mr-2">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-oasis-800 focus:outline-none">
                  <span className="sr-only">Close menu</span>
                  <FontAwesomeIcon icon={faCircleXmark} size="lg" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                <motion.ul
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navigation.map((item, index) => (
                    <Link
                      activeClass="active"
                      className="block px-3 py-2 rounded-md text-base font-medium text-greyish-100 hover:bg-grey-500"
                      duration={500}
                      key={item.name}
                      offset={-80}
                      smooth={true}
                      spy={true}
                      to={item.href}
                    >
                      <span className="font-normal font-mono text-oasis-500 text-xs">
                        0{index + 1}.
                      </span>{' '}
                      {item.name}
                    </Link>
                  ))}
                </motion.ul>
              </div>
              <div className="mt-6 px-5"></div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
