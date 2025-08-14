import { useState } from "react";
import { errorHandler } from "../utils/helpers";

interface UseLocalStorageReturn<T>
  extends Array<T | ((value: T | ((val: T) => T)) => void) | (() => void)> {
  0: T;
  1: (value: T | ((val: T) => T)) => void;
  2: () => void;
  storedValue: T;
  setValue: (value: T | ((val: T) => T)) => void;
  removeValue: () => void;
}

const useLocalStorage = <T>(
  datakey: string,
  initialValue: T
): UseLocalStorageReturn<T> => {
  const key = datakey;

  const [storedValue, setStoredValue] = useState<T>(() => {
    return errorHandler(
      () => {
        const item = window?.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : initialValue;
      },
      () => {
        return initialValue;
      }
    ) as T;
  });

  const setValue = (value: T | ((val: T) => T)) => {
    errorHandler(() => {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window?.localStorage.setItem(key, JSON.stringify(valueToStore));
    });
  };

  const removeValue = () => {
    errorHandler(() => {
      window?.localStorage.removeItem(key);
      setStoredValue(undefined as unknown as T);
    });
  };

  const hookData = [
    storedValue,
    setValue,
    removeValue,
  ] as UseLocalStorageReturn<T>;

  hookData.storedValue = storedValue;
  hookData.setValue = setValue;
  hookData.removeValue = removeValue;

  return hookData;
};

export default useLocalStorage;

/*
-> Here UseLocalStorageReturn is hybrid object - array strucutre so we can access value by passing array (by []) / object (by .) accessing methods.

-> sometimes we do setValue(1) and sometime setValue(prev=>prev+1), so to satisfy that bothe condition structure is like that 'setValue: (value: T | ((val: T) => T)) => void;'

->
  // lazy initializer:- "Only run this logic once on the first render, and set the state to its result."

  // useState<T>:- state value type will be T.

  // errorHandler():- just like try - catch - finally, 1st params for try and second is for catch

*/
