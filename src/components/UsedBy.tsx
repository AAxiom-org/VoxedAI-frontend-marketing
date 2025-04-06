import { useEffect, useState } from "react";

const logos = [
  { name: "Meta", src: "/logos/meta.png" },
  { name: "Amazon", src: "/logos/amazon.png" },
  { name: "Apple", src: "/logos/apple.png" },
  { name: "Google", src: "/logos/google.png" },
  { name: "Berkeley", src: "/logos/berkeley.png" },
  { name: "UIUC", src: "/logos/illinois.png" },
  { name: "Stanford", src: "/logos/stanford.webp" },
  { name: "Harvard", src: "/logos/harvard.png" },
  { name: "MIT", src: "/logos/MIT.png" },
  { name: "NVIDIA", src: "/logos/nvidia.png" },
];

type ColumnState = {
  logoIndex: number;
  animating: boolean;
  direction: "none" | "in" | "out";
  nextLogoIndex?: number;
};

// Animation timing constants
const ANIMATION_DURATION = 500; // ms
const COLUMN_DELAY = 150; // ms between columns
const CYCLE_INTERVAL = 1000; // ms between cycles

export default function IntellectualsUsedBy() {
  // Each column has its own state for which logo is currently showing
  const [columns, setColumns] = useState<ColumnState[]>([
    { logoIndex: 0, animating: false, direction: "none" },
    { logoIndex: 1, animating: false, direction: "none" },
    { logoIndex: 2, animating: false, direction: "none" },
    { logoIndex: 3, animating: false, direction: "none" }
  ]);
  
  // Animation sequence
  useEffect(() => {
    const cycleLogos = () => {
      // Prepare next logo indexes for all columns
      const nextLogoIndexes = columns.map(column => (column.logoIndex + 1) % logos.length);
      
      // Start staggered animation from right to left
      const animateNextColumn = (colIndex: number) => {
        if (colIndex < 0) return;
        
        // Start animation for this column (exit animation)
        setColumns(prev => {
          const updated = [...prev];
          updated[colIndex] = {
            ...updated[colIndex],
            animating: true,
            direction: "out",
            nextLogoIndex: nextLogoIndexes[colIndex]
          };
          return updated;
        });
        
        // After exit animation, change logo and start entry animation
        setTimeout(() => {
          setColumns(prev => {
            const updated = [...prev];
            updated[colIndex] = {
              logoIndex: nextLogoIndexes[colIndex],
              animating: true,
              direction: "in",
              nextLogoIndex: undefined
            };
            return updated;
          });
          
          // After entry animation completes, set animating to false
          setTimeout(() => {
            setColumns(prev => {
              const updated = [...prev];
              updated[colIndex] = {
                ...updated[colIndex],
                animating: false,
                direction: "none"
              };
              return updated;
            });
          }, ANIMATION_DURATION);
          
          // Animate the next column (to the left)
          if (colIndex > 0) {
            setTimeout(() => {
              animateNextColumn(colIndex - 1);
            }, COLUMN_DELAY);
          }
          
        }, ANIMATION_DURATION);
      };
      
      // Start from the rightmost column (3)
      animateNextColumn(columns.length - 1);
    };
    
    const intervalId = setInterval(cycleLogos, CYCLE_INTERVAL);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [columns]);
  
  return (
    <div className="flex flex-col items-center justify-center bg-background text-adaptive text-center overflow-hidden">
      <h1 className="text-md font-bold mb-12">Used By Intellectuals At</h1>
      <div className="flex gap-8">
        {columns.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="w-32 h-32 flex items-center justify-center relative overflow-hidden"
          >
            <div
              className={`absolute transition-all duration-500 ease-snappy ${
                column.animating && column.direction === "out"
                  ? "logo-exit blur-sm" 
                  : column.animating && column.direction === "in"
                    ? "logo-slide-in"
                    : ""
              }`}
            >
              <img
                src={logos[column.logoIndex].src}
                alt={logos[column.logoIndex].name}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}