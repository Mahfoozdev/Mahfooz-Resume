import * as React from "react";

export interface ChartConfig {
  [key: string]: {
    label?: string;
    color?: string;
    icon?: React.ComponentType;
  };
}

interface ChartContextValue {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContextValue | undefined>(
  undefined,
);

export function useChart(): ChartContextValue {
  const context = React.useContext(ChartContext);
  if (!context) {
    // Return empty config instead of throwing to make it optional
    return { config: {} };
  }
  return context;
}

export function ChartProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config: ChartConfig;
}) {
  return (
    <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
  );
}
