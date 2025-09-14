import { fetchPeople, type Person } from "../data/server";
import { useState, useEffect } from "react";

export default function DataFetching() {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [filtered, setFiltered] = useState(false);
  const [peopleText, setPeopleText] = useState("All people");

  useEffect(() => {
    async function fetchPeopleEfect() {
      const people = await fetchPeople();
      // filter by age to get only those over 40
      //   const peopleOver40 = people.filter((person) => person.age > 40);
      setPeople(people);
    }
    fetchPeopleEfect();
  }, []);

  const handleButtonClick = () => {
    if (people && people.length) {
      const peopleOver40 = people.filter((person) => person.age > 40);
      setPeople(peopleOver40);
      setFiltered(true);
      setPeopleText("People over 40");
    }
  };

  let listContent;
  if (people && people.length > 0) {
    listContent = (
      <>
        <ul>
          {people.map((person) => {
            return (
              <li key={`${person.name}-${person.surname}`}>
                {person.name} {person.surname} - {person.age} years old
              </li>
            );
          })}
        </ul>
        <div>{people.length} results</div>
      </>
    );
  } else {
    listContent = <div>loading....</div>;
  }

  let buttonContent;
  if (people && people.length > 0 && !filtered) {
    buttonContent = (
      <div>
        <p>Click button to only show people over age 40</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Click me
        </button>
      </div>
    );
  } else {
    buttonContent = <></>;
  }

  return (
    <div className="max-w-md mx-auto">
      <p className="my-2">
        Data fetching example with useState and useEffect using mocked api call
      </p>
      <div className="bg-gray-100 p-4">
        <h1>{peopleText}</h1>
        {listContent}
      </div>
      {buttonContent}
    </div>
  );
}
