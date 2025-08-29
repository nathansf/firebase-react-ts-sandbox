import reactLogo from "../assets/react.svg";
import GitHubEmbed from "../utils/GitHubEmbed";
import viteLogo from "/vite.svg";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <h1 className="text-xl">Vite + React</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <GitHubEmbed url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2FREADME.md&style=nnfx-light&type=markdown" />
    </>
  );
}
