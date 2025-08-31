import React from "react";
import type { ReactNode } from "react";

interface CustomScrollProps {
  children: ReactNode;
  className?: string;
  height?: string;
  padding?: string;
  bgColor?: string;
  rounded?: string;
}

const CustomScroll: React.FC<CustomScrollProps> = ({
  children,
  className = "",
  height = "250px",
  padding = "p-2",
  bgColor = "bg-white/10",
  rounded = "rounded-xl",
}) => {
  return (
    <div
      className={`overflow-y-auto ${padding} ${bgColor} ${rounded} 
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 
        hover:scrollbar-thumb-gray-500 transition-colors duration-300 ${className}`}
      style={{ maxHeight: height, scrollBehavior: "smooth" }}
    >
      {children}
    </div>
  );
};

export default CustomScroll;
