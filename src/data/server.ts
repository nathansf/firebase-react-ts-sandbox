import people from "./people.json";

const DELAY = 2_000; // ms

export type Person = {
  id: string;
  age: number;
  name: string;
  surname: string;
  gender: string;
};

/** Fetch people from an imaginary database, with an operational delay */
export const fetchPeople = (): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(people), DELAY);
  });
};
