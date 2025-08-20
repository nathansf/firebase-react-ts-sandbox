import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 1000);

  // example "api call" with debounced value
  useEffect(() => {
    if (debouncedSearch) {
      console.log("Seawrching for:", debouncedSearch);
      // fetch(`/api/search?q=${debouncedSearch})`
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
