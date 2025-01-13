"use client";

// External
import { useContext, useState } from "react";

// Internal
import { LogicContext } from "@/contexts/LogicContext";

const DeleteButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { isOn, pressedCharacters, setPressedCharacters } =
    useContext(LogicContext);

  const handleClick = () => {
    if (!isPressed && isOn) {
      setIsPressed(true);

      if (pressedCharacters.length > 0) {
        setPressedCharacters((prev) => prev.slice(0, -1));
      }

      setTimeout(() => {
        setIsPressed(false);
      }, 300);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="preserve-3d relative flex h-8 w-26 cursor-pointer items-center justify-center border-2 border-darkPurple bg-purple transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateZ(${isPressed ? "0" : "1rem"})`,
        pointerEvents: isPressed ? "none" : "auto",
      }}
    >
      <div className="metal absolute h-full w-full" />

      <span className="text-darkestPurple">DELETE</span>

      <div
        className="metal absolute -top-[2px] h-4 w-26 border-2 border-b-0 border-darkPurple bg-purple transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateX(-90deg)`,
          transformOrigin: "top",
        }}
      />

      <div
        className="metal absolute -right-[2px] h-8 w-4 border-2 border-b-0 border-darkPurple bg-purple transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateY(-90deg)`,
          transformOrigin: "right",
        }}
      />

      <div
        className="metal absolute -bottom-[2px] h-4 w-26 border-2 border-t-0 border-darkPurple bg-purple transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateX(90deg)`,
          transformOrigin: "bottom",
        }}
      />

      <div
        className="metal absolute -left-[2px] h-8 w-4 border-2 border-b-0 border-darkPurple bg-purple transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateZ(${isPressed ? "-1rem" : "0"}) rotateY(90deg)`,
          transformOrigin: "left",
        }}
      />
    </button>
  );
};

export default DeleteButton;
