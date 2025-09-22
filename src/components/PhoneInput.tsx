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

function formatPhoneNumber(value: string) {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "").slice(0, 10);

  const len = digits.length;
  if (len < 4) return digits;
  if (len < 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}
