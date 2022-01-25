import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faBracketCurlyLeft,
  faBracketCurlyRight,
} from '@fortawesome/pro-light-svg-icons'

import { PROJECTS } from '../data/projects'

import Card from '../components/Card/Card'

function Projects() {
  const websites = PROJECTS.filter(
    (website) => website.images && website.description
  )

  const [displayAmount, setDisplayAmount] = useState(3)

  return (
    <div className="section bg-grey-600" name="projects">
      <div>
        <div className="container">
          <div>
            <h2>
              <span className="highlight">my</span>.projects
            </h2>
            <p>
              Whether I'm coding to help others make their vision reality,
              taking on an interesting challenge, or to bring an idea to life,
              here are some of the projects I can share.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 xl:mx-auto 3xl:mx-80">
        {websites.map((website, index) =>
          index < displayAmount ? (
            <Card
              card={{
                details: {
                  ...website,
                  highlights: {
                    list: website.roles,
                    separator: '&bull;',
                  },
                  inclusions: {
                    list: website.tech,
                    prefix: <FontAwesomeIcon icon={faBracketCurlyLeft} />,
                    suffix: <FontAwesomeIcon icon={faBracketCurlyRight} />,
                  },
                },
                index,
              }}
              key={website.id}
            />
          ) : null
        )}
        {displayAmount < websites.length ? (
          <div className="w-full text-center mt-12 lg:mt-24">
            <div className="mx-auto">
              <button
                className="button"
                onClick={() => setDisplayAmount(displayAmount + 3)}
                type="button"
              >
                See more
                <span className="ml-2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-mono text-center">
              And more...{' '}
              <a
                href="https://gitlab.com/starbornone"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGitlab} />
              </a>
            </div>
            <div
              className="grid grid-cols-5 my-16 gap-x-6 -ml-16 xl:gap-x-16 xl:-ml-96"
              style={{ width: '120vw' }}
            >
              <img
                alt="World of Darkness"
                src="https://res.cloudinary.com/shianra/image/upload/v1639498098/sha/projects/world-of-darkness-01-min_stfp1r.jpg"
              />
              <img
                alt="Weather Generator"
                src="https://res.cloudinary.com/shianra/image/upload/v1639498098/sha/projects/weather-generator-01-min_jj86qz.jpg"
              />
              <img
                alt="Mosaic Maker"
                src="https://res.cloudinary.com/shianra/image/upload/v1639498097/sha/projects/mosaic-maker-min_ziq5rx.jpg"
              />
              <img
                alt="D&D Point Buy Calculator"
                src="https://res.cloudinary.com/shianra/image/upload/v1639498095/sha/projects/dnd-point-buy-01-min_nd7wcl.jpg"
              />
              <img
                alt="Dark Merchants"
                src="https://res.cloudinary.com/shianra/image/upload/v1639498095/sha/projects/dark-merchants-01-min_xxpdpn.jpg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
