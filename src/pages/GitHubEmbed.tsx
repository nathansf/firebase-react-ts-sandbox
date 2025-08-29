import { useEffect, useRef } from "react";

type GitHubEmbedProps = {
  url: string;
};

export default function GitHubEmbed({ url }: GitHubEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent multiple script inserts
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      // cleanup if needed
      containerRef.current?.removeChild(script);
    };
  });

  return <div ref={containerRef}></div>;
}
