"use client";

import { createContext, useContext, useState } from "react";

const InfoModalContext = createContext({
  isInfoOpen: false,
  setIsInfoOpen: () => {},
});

export function InfoModalProvider({ children }) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <InfoModalContext.Provider value={{ isInfoOpen, setIsInfoOpen }}>
      {children}
    </InfoModalContext.Provider>
  );
}

export function useInfoModal() {
  return useContext(InfoModalContext);
}

