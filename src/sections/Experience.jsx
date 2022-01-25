import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/pro-light-svg-icons'

import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  const currentExperience = 0

  return (
    <div className="section bg-grey-900" name="experience">
      <div>
        <div className="container">
          <div>
            <h2>
              <span className="highlight">my</span>.experience
            </h2>
            <p>
              Formally, I've studied a Diploma System Analysis and Design,
              Bachelor of International Business (International Business), and
              worked towards an MBA. Otherwise, I've completed numerous courses
              on JavaScript, React, Node, and Unity, and made my way through
              various books on design and creating user experiences.
            </p>
            <div className="mt-12 lg:mt-16">
              <h3>
                <span className="font-normal font-mono">
                  {EXPERIENCE[currentExperience].role}
                </span>{' '}
                <span className="text-oasis-500">
                  @ {EXPERIENCE[currentExperience].name}
                </span>
              </h3>
              <div className="font-mono text-greyish-600">
                {EXPERIENCE[currentExperience].duration}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: EXPERIENCE[currentExperience].description,
                }}
              ></p>
              <ul className="mt-2 ml-6 space-y-2 fa-ul">
                {EXPERIENCE[currentExperience].list.map((item, index) => (
                  <li key={index}>
                    <span className="fa-li text-oasis-600">
                      <FontAwesomeIcon icon={faCode} />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-12 lg:mt-16">
              More of my history is available on{' '}
              <a
                href="https://www.linkedin.com/in/sha-kong-brooks/"
                rel="noreferrer"
                target="_blank"
              >
                Linked
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              . I also have a couple of my repos public on{' '}
              <a
                href="https://gitlab.com/starbornone"
                rel="noreferrer"
                target="_blank"
              >
                GitLab <FontAwesomeIcon icon={faGitlab} />
              </a>{' '}
              including some interesting{' '}
              <a
                href="https://gitlab.com/starborn-code-challenges"
                rel="noreferrer"
                target="_blank"
              >
                code challenges
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
