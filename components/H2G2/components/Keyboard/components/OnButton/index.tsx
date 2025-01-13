"use client";

// External
import clsx from "clsx";
import { useContext, useState } from "react";

// Internal
import { LogicContext } from "@/contexts/LogicContext";

const OnButton = () => {
  const { isOn, setIsOn } = useContext(LogicContext);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!isPressed) {
      setIsPressed(true);
      setIsOn(!isOn);

      setTimeout(() => {
        setIsPressed(false);
      }, 300);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={clsx(
          "preserve-3d relative flex h-8 w-8 cursor-pointer items-center justify-center border-2 border-darkPink transition-all duration-300 ease-in-out",
          {
            "bg-red": !isOn,
            "bg-lightRed": isOn,
          },
        )}
        style={{
          transform: `translateZ(${isPressed ? "0" : "1rem"})`,
          pointerEvents: isPressed ? "none" : "auto",
        }}
      >
        <div
          className={clsx(
            "glow pointer-events-none absolute h-16 w-16 transition-all duration-300 ease-in-out",
            {
              "opacity-0": !isOn,
              "opacity-100": isOn,
            },
          )}
          style={{ transform: `translateZ(${isPressed ? "0" : "-1rem"})` }}
        />

        <div className="metal absolute h-full w-full" />

        <span className="text-[1.5rem] text-white">⏼</span>

        <div
          className={clsx(
            "metal absolute -top-[2px] h-4 w-8 border-2 border-b-0 border-darkPink transition-all duration-300 ease-in-out",
            {
              "bg-red": !isOn,
              "bg-lightRed": isOn,
            },
          )}
          style={{
            transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateX(-90deg)`,
            transformOrigin: "top",
          }}
        />

        <div
          className={clsx(
            "metal absolute -right-[2px] h-8 w-4 border-2 border-b-0 border-darkPink transition-transform duration-300 ease-in-out",
            {
              "bg-red": !isOn,
              "bg-lightRed": isOn,
            },
          )}
          style={{
            transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateY(-90deg)`,
            transformOrigin: "right",
          }}
        />

        <div
          className={clsx(
            "metal absolute -bottom-[2px] h-4 w-8 border-2 border-t-0 border-darkPink transition-transform duration-300 ease-in-out",
            {
              "bg-red": !isOn,
              "bg-lightRed": isOn,
            },
          )}
          style={{
            transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateX(90deg)`,
            transformOrigin: "bottom",
          }}
        />

        <div
          className={clsx(
            "metal absolute -left-[2px] h-8 w-4 border-2 border-b-0 border-darkPink transition-transform duration-300 ease-in-out",
            {
              "bg-red": !isOn,
              "bg-lightRed": isOn,
            },
          )}
          style={{
            transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateY(90deg)`,
            transformOrigin: "left",
          }}
        />
      </button>
    </>
  );
};

export default OnButton;
