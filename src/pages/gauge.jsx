import React from "react";

const Gauge = ({ value, label, icon }) => {
  return (
    <div className="relative flex flex-col items-center w-24 h-24">
      <svg viewBox="0 0 100 100" className="absolute w-full h-full">
        {[...Array(12)].map((_, i) => {
          const angle = i * 30 - 90;
          const x1 = 50 + 40 * Math.cos((angle * Math.PI) / 180);
          const y1 = 50 + 40 * Math.sin((angle * Math.PI) / 180);
          const x2 = 50 + 45 * Math.cos((angle * Math.PI) / 180);
          const y2 = 50 + 45 * Math.sin((angle * Math.PI) / 180);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="yellow"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${value - 90}, 50, 50)`}
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl">
        {icon}
      </div>

      <div className="absolute bottom-0 text-center text-white">
        <span className="text-lg font-bold">{value}°</span>
        <br />
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
};

export default Gauge;
