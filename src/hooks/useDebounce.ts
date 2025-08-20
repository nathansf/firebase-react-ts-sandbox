import { useState, useEffect } from "react";

/**
 * Custom React hook that debounces a value by the given delay.
 * @param value The value to debounce
 * @param delay Delay in milliseconds
 * @returns The debounced value
 */

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup timeout if value changes before delay expires
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
