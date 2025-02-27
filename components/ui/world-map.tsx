"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import DottedMap from "dotted-map";

// Lazy load the component
const WorldMap = dynamic(() => Promise.resolve(WorldMapComponent), {
  ssr: false,
});

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

function WorldMapComponent({ dots = [], lineColor = "#22AD01" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const svgMapRef = useRef<string | null>(null);

  const [svgMap, setSvgMap] = useState<string | null>(() => svgMapRef.current);

  useEffect(() => {
    if (!svgMapRef.current) {
      const map = new DottedMap({ height: 100, grid: "diagonal" });
      svgMapRef.current = map.getSVG({
        radius: 0.22,
        color: "#00000040",
        shape: "circle",
        backgroundColor: "white",
      });
      setSvgMap(svgMapRef.current);
    }
  }, []);

  const projectPoint = useMemo(
    () => (lat: number, lng: number) => {
      const x = (lng + 180) * (800 / 360);
      const y = (90 - lat) * (400 / 180);
      return { x, y };
    },
    []
  );

  const paths = useMemo(
    () =>
      dots.map((dot) => {
        const start = projectPoint(dot.start.lat, dot.start.lng);
        const end = projectPoint(dot.end.lat, dot.end.lng);
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return {
          d: `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`,
          start,
          end,
        };
      }),
    [dots, projectPoint]
  );

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      {svgMap && (
        <div
          dangerouslySetInnerHTML={{ __html: svgMap }}
          className="h-full w-full absolute inset-0 pointer-events-none select-none"
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((path, i) => (
          <motion.path
            key={`path-${i}`}
            d={path.d}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}

        {paths.map((path, i) => (
          <g key={`dots-${i}`}>
            {[path.start, path.end].map((point, index) => (
              <g key={`dot-${i}-${index}`}>
                <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

export default WorldMap;
