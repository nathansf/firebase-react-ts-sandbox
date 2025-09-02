import GitHubEmbed from "../utils/GitHubEmbed";

export default function CodeEmbed() {
  return (
    <>
      <div className="mx-24 my-12">
        Util to import code snippets directly from Github. Utilizing{" "}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          target="_blank"
          href="https://github.com/yusanshi/emgithub"
        >
          emgithub
        </a>{" "}
        tool
      </div>
      <GitHubEmbed url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Futils%2FGitHubEmbed.tsx&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on" />
    </>
  );
}
