import SearchBox from "./SearchBox";

export default function Debounce() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div>
        <p>Starting with a simple input to import custom useDebounce hook</p>
        <SearchBox />
      </div>
    </div>
  );
}
