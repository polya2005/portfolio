import React, { createContext, useContext, useRef } from "react";
import type { TooltipContextType } from "../types";

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

function TooltipProvider({ children }: { children: React.ReactNode }) {
  const counter = useRef(0);

  const getNextTooltipId = () => {
    return ++counter.current;
  };

  return (
    <TooltipContext.Provider value={{ getNextTooltipId }}>
      {children}
    </TooltipContext.Provider>
  );
}

function useTooltipContext() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltipContext must be used within a TooltipProvider");
  }
  return context;
}

export { TooltipProvider, useTooltipContext };
