import people from "./people.json";
import tasks from "./tasks.json";

const DELAY = 1_000; // ms

export type Person = {
  id: string;
  age: number;
  name: string;
  surname: string;
  gender: string;
};

export type Task = {
  id: string;
  title: string;
  date: string;
  isCompleted: boolean;
};

/** Fetch people from an imaginary database, with an operational delay */
export const fetchPeople = (): Promise<Person[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(people), DELAY);
  });
};

/** Fetch people from an imaginary database, with an operational delay */
export const fetchTasks = (): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasks), DELAY);
  });
};
