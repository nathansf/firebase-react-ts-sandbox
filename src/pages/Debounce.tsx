import GitHubEmbed from "../utils/GitHubEmbed";
import SearchBox from "../components/SearchBox";

export default function Debounce() {
  return (
    <>
      <div className="mx-auto flex max-w-lg items-center rounded-xl bg-white p-6 shadow-lg outline outline-black/5">
        <div>
          <p className="mb-8">
            Input field with search on keystroke debounced, output to console
            instead of search api
          </p>
          <SearchBox />
        </div>
      </div>
      <GitHubEmbed
        url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Fhooks%2FuseDebounce.ts&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"
        title="Debounce custom hook"
      />
      <GitHubEmbed
        url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Fcomponents%2FSearchBox.tsx&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"
        title="Example usage of debounce hook"
      />
    </>
  );
}
