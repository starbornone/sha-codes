import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { QUOTES } from '../data/quotes'

export default function Footer() {
  return (
    <footer
      className="py-24 bg-grey-900 overflow-hidden"
    >
      <div className="max-w-7xl lg:px-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl">
          <div className="lg:py-24">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sha-kong-brooks/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://gitlab.com/starbornone"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGitlab} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-grey-400">
                {QUOTES[Math.floor(Math.random() * QUOTES.length)]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
