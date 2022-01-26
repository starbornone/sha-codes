import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/pro-light-svg-icons'

export default function ExperienceCard({ experience }) {
  return (
    <div className="mt-12 lg:mt-16">
      <h3>
        <span className="font-normal font-mono">{experience.role}</span>{' '}
        <span className="text-oasis-500">@ {experience.name}</span>
      </h3>
      <div className="font-mono text-greyish-600">{experience.duration}</div>
      {experience.description && (
        <p
          dangerouslySetInnerHTML={{
            __html: experience.description,
          }}
        ></p>
      )}
      {experience.list && (
        <ul className="mt-2 ml-6 space-y-2 fa-ul">
          {experience.list.map((item, index) => (
            <li key={index}>
              <span className="fa-li text-oasis-600">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
