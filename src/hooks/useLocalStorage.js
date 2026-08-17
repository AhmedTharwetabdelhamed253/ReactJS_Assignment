import { useState, useEffect } from "react";

/**
 * Custom Hook: useLocalStorage
 *
 * Behaves exactly like useState, but the value is read from (and written back to)
 * the browser's localStorage, so it survives page refreshes.
 *
 * Uses two built-in hooks internally:
 *  - useState  -> holds the current value in memory
 *  - useEffect -> persists the value to localStorage whenever it changes
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: could not read key "${key}"`, error);
      return initialValue;
    }
  });

  // useEffect: side effect that runs whenever "key" or "value" changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`useLocalStorage: could not write key "${key}"`, error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
