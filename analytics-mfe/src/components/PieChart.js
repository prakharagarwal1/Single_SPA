import React from "react";

export const PieChart = ({ data, labels, colors }) => {
  const cx = 180;
  const cy = 180;
  const r = 120;
  let start = -Math.PI / 2;

  const total = data.reduce((s, v) => s + v, 0);

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 360 360"
        className="w-64 h-64"
        role="img"
        aria-label="Pie chart"
      >
        {data.map((v, i) => {
          const slice = total ? (v / total) * 2 * Math.PI : 0;
          const end = start + slice;
          const x1 = cx + r * Math.cos(start);
          const y1 = cy + r * Math.sin(start);
          const x2 = cx + r * Math.cos(end);
          const y2 = cy + r * Math.sin(end);
          const large = slice > Math.PI ? 1 : 0;
          const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
          start = end;
          return (
            <path
              key={i}
              d={path}
              fill={colors[i] || "#6366f1"}
              stroke="#fff"
              strokeWidth="2"
              className="transition-all duration-300 hover:opacity-80 hover:scale-105 origin-center"
            />
          );
        })}
        <circle cx={cx} cy={cy} r={r * 0.55} fill="#fff" />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          className="fill-gray-900 text-2xl font-bold"
        >
          {total}
        </text>
        <text
          x={cx}
          y={cy + 18}
          textAnchor="middle"
          className="fill-gray-500 text-xs"
        >
          Total
        </text>
      </svg>
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {labels.map((label, i) => (
          <div key={i} className="flex items-center text-sm text-gray-600">
            <span
              className="h-3 w-3 rounded-full mr-2"
              style={{ backgroundColor: colors[i] || "#6366f1" }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};
