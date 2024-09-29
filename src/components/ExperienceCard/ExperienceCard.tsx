import React from "react";
import { ExperienceData } from "@/data/experience";

interface ExperienceCardProps {
  experience: ExperienceData;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="mt-12 lg:mt-16">
      <h3>
        <span className="font-mono font-normal">{experience.role}</span>{' '}
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
        <ul className="mt-2 ml-6 space-y-2">
          {experience.list.map((item, index) => (
            <li className="items-center flex gap-2" key={index}>
              <span className="text-oasis-600">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M405.1 .8c-8.4-2.8-17.4 1.7-20.2 10.1l-160 480c-2.8 8.4 1.7 17.4 10.1 20.2s17.4-1.7 20.2-10.1l160-480c2.8-8.4-1.7-17.4-10.1-20.2zM172 117.4c-5.9-6.6-16-7.2-22.6-1.3l-144 128C2 247.1 0 251.4 0 256s2 8.9 5.4 12l144 128c6.6 5.9 16.7 5.3 22.6-1.3s5.3-16.7-1.3-22.6L40.1 256 170.6 140c6.6-5.9 7.2-16 1.3-22.6zm296.1 0c-5.9 6.6-5.3 16.7 1.3 22.6L599.9 256 469.4 372c-6.6 5.9-7.2 16-1.3 22.6s16 7.2 22.6 1.3l144-128c3.4-3 5.4-7.4 5.4-12s-2-8.9-5.4-12l-144-128c-6.6-5.9-16.7-5.3-22.6 1.3z"/></svg>
              </span>
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
