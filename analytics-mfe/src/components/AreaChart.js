import React from "react";
import { useState } from "react";

export const AreaChart = ({ data, labels }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const width = 720;
  const height = 260;
  const padL = 8;
  const padR = 8;
  const padT = 16;
  const padB = 24;

  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;

  const getX = (i) =>
    padL + (i / Math.max(data.length - 1, 1)) * (width - padL - padR);
  const getY = (v) => padT + (1 - (v - min) / range) * (height - padT - padB);

  const points = data.map((v, i) => `${getX(i)},${getY(v)}`).join(" ");
  const areaPoints = `${getX(0)},${height - padB} ${points} ${getX(
    data.length - 1,
  )},${height - padB}`;

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label="Area chart"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
          </linearGradient>
        </defs>
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
                {Math.round(min + f * range)}
              </text>
            </g>
          );
        })}
        <polygon points={areaPoints} fill="url(#areaGrad)" />
        <polyline
          points={points}
          fill="none"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {data.map((v, i) => (
          <circle
            key={i}
            cx={getX(i)}
            cy={getY(v)}
            r={hoveredIndex === i ? 5 : 3}
            fill="#fff"
            stroke="#6366f1"
            strokeWidth="2"
            className="transition-all duration-150 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
        {labels.map((label, i) => (
          <text
            key={i}
            x={getX(i)}
            y={height - 6}
            textAnchor="middle"
            className="fill-gray-400 text-[10px]"
          >
            {label}
          </text>
        ))}
        {hoveredIndex !== null && (
          <line
            x1={getX(hoveredIndex)}
            y1={padT}
            x2={getX(hoveredIndex)}
            y2={height - padB}
            stroke="#6366f1"
            strokeDasharray="2 2"
            opacity="0.5"
          />
        )}
      </svg>
    </div>
  );
};
