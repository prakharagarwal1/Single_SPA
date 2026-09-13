import React from "react";

export const BarChart = ({ data, labels, color }) => {
  const width = 720;
  const height = 260;
  const padL = 8;
  const padR = 8;
  const padT = 16;
  const padB = 24;
  const gap = 12;

  const max = Math.max(...data, 1);
  const barWidth = Math.max(
    (width - padL - padR - gap * (data.length - 1)) / data.length,
    4,
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      role="img"
      aria-label="Bar chart"
    >
      {[0.25, 0.5, 0.75, 1].map((f) => {
        const y = padT + (1 - f) * (height - padT - padB);
        return (
          <g key={f}>
            <line
              x1={padL}
              y1={y}
              x2={width - padR}
              y2={y}
              stroke="#e5e7eb"
              strokeDasharray="4 4"
            />
            <text
              x={padL - 8}
              y={y + 4}
              textAnchor="end"
              className="fill-gray-400 text-[10px]"
            >
              {Math.round(f * max)}
            </text>
          </g>
        );
      })}
      {data.map((v, i) => {
        const x = padL + i * (barWidth + gap);
        const barH = (v / max) * (height - padT - padB);
        const y = height - padB - barH;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barH}
              rx="4"
              fill={color || "#6366f1"}
              opacity="0.9"
              className="transition-all duration-300 hover:opacity-100"
            />
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              className="fill-gray-500 text-[10px] font-medium"
            >
              {v}
            </text>
            <text
              x={x + barWidth / 2}
              y={height - 6}
              textAnchor="middle"
              className="fill-gray-400 text-[10px]"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
