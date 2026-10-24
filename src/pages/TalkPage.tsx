import React from "react";
import { useParams } from "react-router";
import DetailLayout from "@/components/DetailLayout";
import { TALKS, TalkData } from "@/data/talks";
import { talkMeta, talkPath } from "@/meta";
import { usePageMeta } from "@/utils/usePageMeta";
import NotFound from "./NotFound";

function TalkDetail({ index }: { index: number }) {
  const talk = TALKS[index];
  usePageMeta(talkMeta(talk));

  const link = (neighbour?: TalkData) =>
    neighbour && { to: talkPath(neighbour), label: neighbour.title };

  return (
    <DetailLayout
      back={{ to: "/#talks", label: "All talks" }}
      eyebrow={`${talk.venue} • ${talk.year}`}
      title={talk.title}
      previous={link(TALKS[index - 1])}
      next={link(TALKS[index + 1])}
    >
      <p className="text-lg leading-relaxed">{talk.description}</p>
      {talk.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
          {section.points && (
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      {talk.quote && <blockquote className="mt-12">{talk.quote}</blockquote>}
      <div className="mt-12">
        {talk.note && <p className="text-greyish-400">{talk.note}</p>}
        <a className="inline-block mt-2 detail-button" href={talk.transcriptUrl} rel="noreferrer" target="_blank">
          Read the full transcript on AI Dreams
        </a>
      </div>
    </DetailLayout>
  );
}

export default function TalkPage(): JSX.Element {
  const { slug } = useParams();
  const index = TALKS.findIndex((talk) => talk.id === slug);
  return index === -1 ? <NotFound /> : <TalkDetail index={index} />;
}
