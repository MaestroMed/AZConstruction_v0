"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// Color palette for charts
const COLORS = {
  primary: "#00d4ff",
  secondary: "#3b82f6",
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  purple: "#8b5cf6",
  pink: "#ec4899",
  gray: "#6b7280",
};

const CHART_COLORS = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.success,
  COLORS.warning,
  COLORS.danger,
  COLORS.purple,
  COLORS.pink,
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a1628] text-white px-4 py-3 rounded-lg shadow-lg border border-cyan-500/20">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-400">{entry.name}:</span>
            <span className="font-semibold">{entry.value.toLocaleString("fr-FR")}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Card wrapper for charts
interface ChartCardProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  subtitle,
  action,
  children,
  className,
}: ChartCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 p-6",
        className
      )}
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

// Line/Area Chart
interface LineChartData {
  name: string;
  [key: string]: string | number;
}

interface RevenueChartProps {
  data: LineChartData[];
  lines: { key: string; name: string; color?: string }[];
  type?: "line" | "area";
  height?: number;
}

export function RevenueChart({
  data,
  lines,
  type = "area",
  height = 300,
}: RevenueChartProps) {
  const ChartComponent = type === "area" ? AreaChart : LineChart;
  const DataComponent = type === "area" ? Area : Line;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <ChartComponent data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <defs>
          {lines.map((line, index) => (
            <linearGradient
              key={line.key}
              id={`gradient-${line.key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={line.color || CHART_COLORS[index]}
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor={line.color || CHART_COLORS[index]}
                stopOpacity={0}
              />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: 20 }}
          iconType="circle"
          formatter={(value) => <span className="text-gray-600 text-sm">{value}</span>}
        />
        {lines.map((line, index) =>
          type === "area" ? (
            <Area
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name}
              stroke={line.color || CHART_COLORS[index]}
              strokeWidth={2}
              fill={`url(#gradient-${line.key})`}
            />
          ) : (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.name}
              stroke={line.color || CHART_COLORS[index]}
              strokeWidth={2}
              dot={{ fill: line.color || CHART_COLORS[index], r: 4 }}
              activeDot={{ r: 6 }}
            />
          )
        )}
      </ChartComponent>
    </ResponsiveContainer>
  );
}

// Bar Chart
interface BarChartData {
  name: string;
  value: number;
  color?: string;
}

interface ProductBarChartProps {
  data: BarChartData[];
  height?: number;
  layout?: "vertical" | "horizontal";
}

export function ProductBarChart({
  data,
  height = 300,
  layout = "horizontal",
}: ProductBarChartProps) {
  if (layout === "vertical") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={true} vertical={false} />
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
            width={80}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="value"
            name="Ventes"
            radius={[0, 4, 4, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || CHART_COLORS[index % CHART_COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#6b7280", fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" name="Ventes" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color || CHART_COLORS[index % CHART_COLORS.length]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// Pie/Donut Chart
interface PieChartData {
  name: string;
  value: number;
  color?: string;
  [key: string]: string | number | undefined;
}

interface CategoryPieChartProps {
  data: PieChartData[];
  height?: number;
  innerRadius?: number;
  showLegend?: boolean;
}

export function CategoryPieChart({
  data,
  height = 300,
  innerRadius = 60,
  showLegend = true,
}: CategoryPieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={innerRadius + 40}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || CHART_COLORS[index % CHART_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {showLegend && (
        <div className="flex flex-col gap-3 min-w-[180px]">
          {data.map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (
              <div key={item.name} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor:
                      item.color || CHART_COLORS[index % CHART_COLORS.length],
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900">{percentage}%</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Sparkline (mini chart)
interface SparklineProps {
  data: number[];
  color?: string;
  height?: number;
}

export function Sparkline({
  data,
  color = COLORS.primary,
  height = 40,
}: SparklineProps) {
  const chartData = data.map((value, index) => ({ value, index }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill="url(#sparklineGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// Progress Ring
interface ProgressRingProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}

export function ProgressRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = COLORS.primary,
  label,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = Math.min((value / max) * 100, 100);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">
          {percentage.toFixed(0)}%
        </span>
        {label && <span className="text-xs text-gray-500">{label}</span>}
      </div>
    </div>
  );
}

