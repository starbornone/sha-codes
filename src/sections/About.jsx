import { AnimatePresence, motion } from 'framer-motion'

import { fadeInVariants } from '../animations'

export default function About() {
  return (
    <AnimatePresence>
      <motion.div animate="visible" initial="hidden" variants={fadeInVariants}>
        <div
          className="section bg-grey-600 bg-cover bg-center"
          name="about"
          style={{
            backgroundImage:
              'url(https://res.cloudinary.com/shianra/image/upload/v1639497866/sha/9900K-min_a2uusi.jpg)',
          }}
        >
          <div>
            <div className="container">
              <div>
                <h2>
                  <span className="highlight">about</span>.me
                </h2>
                <p>
                  I fell in love with computers at a young age and when I
                  discovered the internet, being a hobby web developer came
                  naturally. I started with HTML, CSS, PHP, and MySQL to build
                  simple websites about things that interested me. I branched
                  out from there, dabbling in Java, C++, and .NET.
                </p>
                <p>
                  I've since expanded my horizons into game design and
                  development with C# where I hope to create challenging and
                  thought-provoking experiences through a series of strategy and
                  role-playing games.
                </p>
                <p>
                  But when I'm not lost in code, I play games on the latest
                  computer I've built or the tabletop my cat loves to nap on. I
                  also enjoy reading books and watching videos on all sorts of
                  topics, having found that knowledge in one area is often
                  transferrable to others. And I{' '}
                  <a
                    href="https://aidreams.world"
                    rel="noreferrer"
                    target="_blank"
                  >
                    write about things
                  </a>{' '}
                  that interest or are important to me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
