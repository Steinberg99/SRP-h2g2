"use client";

// External
import { useEffect, useRef } from "react";

// Siblings
import Cover from "./components/Cover";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

const H2G2 = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMousemove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const middleX = window.innerWidth / 2;
      const middleY = window.innerHeight / 2;

      const offsetX = (((x - middleX) / middleX) * 45) / 2;
      const offsetY = (((y - middleY) / middleY) * 45) / 2;

      ref.current!.style.setProperty("--rotateX", `${offsetX}deg`);
      ref.current!.style.setProperty("--rotateY", `${-offsetY}deg`);
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return (
    <div ref={ref} className="h2g2 relative h-128 w-128">
      <Cover />

      <Display />

      <Keyboard />
    </div>
  );
};

export default H2G2;
