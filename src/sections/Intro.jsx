import { AnimatePresence, motion } from 'framer-motion'

import { transition } from '../animations'

export default function Intro() {
  return (
    <div className="py-24 bg-grey-900 overflow-hidden">
      <div className="max-w-7xl lg:px-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl lg:flex lg:items-center">
          <AnimatePresence>
            <motion.div
              animate="enter"
              exit="exit"
              initial="exit"
              variants={{
                exit: {
                  x: '50%',
                  opacity: 0,
                  transition,
                },
                enter: {
                  x: '0%',
                  opacity: 1,
                  transition,
                },
              }}
            >
              <div className="lg:py-24">
                <h1 className="mt-4 sm:mt-5 lg:mt-6">
                  <span className="block font-mono text-xl sm:text-2xl xl:text-2xl">
                    Hi. I'm Sha, a
                  </span>
                  <span className="block font-extrabold text-oasis-500 sm:text-6xl xl:text-6xl">
                    Codeologist.
                  </span>
                </h1>
                <p className="text-base sm:text-xl lg:text-lg xl:text-xl">
                  I use my skills with <strong>React</strong> and{' '}
                  <strong>Node</strong> to turn code into useful tools and
                  engaging experiences, backed by well-designed{' '}
                  <strong>PostgreSQL</strong> and <strong>MongoDB</strong>{' '}
                  databases.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
