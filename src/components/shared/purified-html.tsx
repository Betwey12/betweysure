"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function PurifiedHtml({ html }: { html: string }) {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || html.length === 0) return;

    const cleanHtml = DOMPurify.sanitize(html);
    setSanitizedHtml(cleanHtml);
  }, [html]);

  if (!sanitizedHtml) return null;

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
