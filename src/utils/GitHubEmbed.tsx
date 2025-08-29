import { useEffect, useRef } from "react";

type GitHubEmbedProps = {
  url: string;
  title: string;
};

export default function GitHubEmbed({ url, title }: GitHubEmbedProps) {
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

  return (
    <div className="mx-24 my-12">
      <h3>{title}</h3>
      <div ref={containerRef}></div>
    </div>
  );
}
