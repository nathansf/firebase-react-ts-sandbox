import { type FormEvent } from "react";
import PhoneInput from "./PhoneInput";

export default function Form() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    for (const [k, v] of formData.entries()) {
      console.log(`${k}: ${v}`);
    }
  };

  return (
    <form
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name:</label>
      <input
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="text"
        id="name"
        name="name"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="email"
        id="email"
        name="email"
        required
      />

      <label htmlFor="phoneNumber">Phone:</label>
      <PhoneInput />
      <button
        className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
