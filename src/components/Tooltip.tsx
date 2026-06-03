import "../index.css";
import React, { useRef } from "react";

import { useTooltipContext } from "../context/TooltipContext";

function Tooltip({ children }: { children: React.ReactNode }) {
  const { getNextTooltipId } = useTooltipContext();
  const tooltipIdRef = useRef<number | null>(null);

  if (tooltipIdRef.current === null) {
    tooltipIdRef.current = getNextTooltipId();
  }

  const tooltipId = tooltipIdRef.current;

  return (
    <span className="group relative">
      <sup className="cursor-help text-accent-soft">[{tooltipId}]</sup>

      <span className="absolute left-0 bottom-full mb-2 hidden w-64 rounded border bg-white p-2 text-sm text-bg-primary shadow-lg group-hover:block">
        {children}
      </span>
    </span>
  );
}

export default Tooltip;
