'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface IntroContextType {
  isIntroComplete: boolean;
  completeIntro: () => void;
}

const IntroContext = createContext<IntroContextType>({
  isIntroComplete: false,
  completeIntro: () => {},
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const completeIntro = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  return (
    <IntroContext.Provider value={{ isIntroComplete, completeIntro }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
