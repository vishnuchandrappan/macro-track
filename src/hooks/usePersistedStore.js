import { useState, useEffect } from "react";
import { getPersistedItem, setPersistedItem } from "../utils/helpers";

export const usePersistedStore = (initialValue, key) => {
  const [state, setState] = useState(getPersistedItem(key) || initialValue);

  useEffect(() => {
    setPersistedItem(key, state);
  }, [key, state]);

  return [state, setState];
};
