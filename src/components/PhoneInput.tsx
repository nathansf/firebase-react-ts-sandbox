import { useState, type ChangeEvent } from "react";

export default function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <input
      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      name="phoneNumber"
      id="phoneNumber"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      required
    />
  );
}

function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/\D/g, "").slice(0, 10);
}
