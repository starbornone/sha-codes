import React from "react";
import { Link, useLocation } from "react-router";
import { notFoundMeta } from "@/meta";
import { usePageMeta } from "@/utils/usePageMeta";

export default function NotFound(): JSX.Element {
  const { pathname } = useLocation();
  usePageMeta(notFoundMeta(pathname));

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-24 text-center bg-grey-900">
      <h1 className="font-bold text-greyish-200">
        <span className="highlight">404</span>.not-found
      </h1>
      <p>There&apos;s no page here. It may have moved, or the link may be mistyped.</p>
      <Link className="detail-button" to="/">
        Back to sha.codes
      </Link>
    </div>
  );
}
