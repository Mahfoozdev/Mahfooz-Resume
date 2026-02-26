import * as React from "react";
import { cn } from "./lib/utils";
import { useChart, type ChartConfig } from "./chart-context";
import type { LegendProps } from "recharts";

interface PayloadItem {
  value?: string;
  type?: string;
  dataKey?: string | number;
  color?: string;
  payload?: {
    fill?: string;
  };
}

export interface ChartLegendContentProps {
  active?: boolean;
  payload?: PayloadItem[];
  className?: string;
  verticalAlign?: LegendProps["verticalAlign"];
  hideIcon?: boolean;
  nameKey?: string;
  indicator?: "dot" | "line" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  label?: string;
}

const getPayloadConfigFromPayload = (
  config: ChartConfig,
  payload: PayloadItem,
  key: string,
) => {
  // Try to get from config using the key
  if (config && key && config[key]) {
    return config[key];
  }

  // Try to get from payload value
  if (payload && payload.value) {
    const valueKey = payload.value.toLowerCase();
    if (config && config[valueKey]) {
      return config[valueKey];
    }
  }

  return null;
};

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentProps
>(
  (
    {
      className,
      payload = [],
      verticalAlign = "bottom",
      nameKey,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
    },
    ref,
  ) => {
    const { config } = useChart();

    // Check if payload exists and has length
    if (!payload || !Array.isArray(payload) || payload.length === 0) {
      return null;
    }

    // Filter and map the payload items
    const filteredPayload = payload.filter(
      (item): item is PayloadItem =>
        item !== null && item !== undefined && item.type !== "none",
    );

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4",
          verticalAlign === "top"
            ? "mb-4"
            : verticalAlign === "bottom"
              ? "mt-4"
              : "",
          className,
        )}
      >
        {!hideLabel && label && (
          <span className="text-sm font-medium">{label}</span>
        )}
        <div className="flex flex-wrap items-center gap-2">
          {filteredPayload.map((item, index) => {
            const key =
              nameKey ||
              (typeof item.dataKey === "string" ? item.dataKey : "value");
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const color = item.color || item.payload?.fill || "#000";

            return (
              <div
                key={`legend-item-${index}`}
                className="flex items-center gap-1"
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      "shrink-0",
                      indicator === "dot" && "h-2 w-2 rounded-full",
                      indicator === "line" && "h-1 w-3",
                      indicator === "dashed" && "h-1 w-3 border border-dashed",
                    )}
                    style={{ backgroundColor: color }}
                  />
                )}
                <span className="text-xs text-muted-foreground">
                  {item.value || itemConfig?.label || key}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

ChartLegendContent.displayName = "ChartLegendContent";
