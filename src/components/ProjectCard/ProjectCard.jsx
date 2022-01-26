import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faBrowsers } from '@fortawesome/pro-light-svg-icons'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { transition } from '../../animations'

function ProjectCard({ card: { details, index } }) {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <AnimatePresence>
      <motion.div
        animate={controls}
        initial="hidden"
        ref={ref}
        variants={{
          hidden: {
            x: index % 2 === 0 ? '50%' : '-50%',
            opacity: 0,
            transition,
          },
          visible: {
            x: '0%',
            opacity: 1,
            transition,
          },
        }}
      >
        <div className="card">
          <div>
            <div
              className={`content ${index % 2 === 0 ? 'lg:col-start-2' : ''}`}
            >
              <div>
                <div className="meta">
                  {details.highlights.list.map((highlight, index) => (
                    <div key={index}>
                      {highlight}
                      {index < details.highlights.list.length - 1 && (
                        <div
                          className="separator decorator"
                          dangerouslySetInnerHTML={{
                            __html: details.highlights.separator,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="heading">
                    <h2>{details.name}</h2>
                    <div>
                      {details.url && (
                        <a href={details.url} rel="noreferrer" target="_blank">
                          <FontAwesomeIcon icon={faBrowsers} />
                        </a>
                      )}
                      {details.repo && (
                        <a href={details.repo} rel="noreferrer" target="_blank">
                          <FontAwesomeIcon icon={faGitlab} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p>{details.description}</p>
                </div>
                <div className="meta my-6">
                  {details.inclusions.list.map((inclusion, index) => (
                    <div key={index}>
                      <span className="decorator mr-2">
                        {details.inclusions.prefix}
                      </span>
                      {inclusion}
                      <span className="decorator ml-2">
                        {details.inclusions.suffix}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={index % 2 === 0 ? 'lg:col-start-1' : ''}>
              <div
                className={`${
                  index % 2 === 0
                    ? 'pr-4 -ml-24 sm:pr-6 md:-ml-10 xl:-ml-36'
                    : 'pl-4 -mr-24 sm:pl-6 md:-mr-10 xl:-mr-36'
                } img_section`}
              >
                <img
                  className={index % 2 === 0 ? 'lg:right-0' : 'lg:left-0'}
                  src={details.images[0]}
                  alt={details.name}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectCard
