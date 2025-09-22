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
        className="input-text"
        type="text"
        id="name"
        name="name"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        className="input-text"
        type="email"
        id="email"
        name="email"
        required
      />

      <label htmlFor="phoneNumber">Phone:</label>
      <PhoneInput />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
