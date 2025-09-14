import type { Place } from "../api/Place";
import { useState } from "react";
import Map from "../components/Map";
import LocationSearch from "../components/LocationSearch";

export default function Memo() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-wcreen grid grid-cols-12">
      <div className="col-span-3 p-2">
        Enter a location and submit form with enter, then click Go button.
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}
