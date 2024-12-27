import React, { createContext, useContext } from "react";

interface ScrollContextType {
  scrollToSection: (id: string, offset?: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollToSection = (id: string, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
