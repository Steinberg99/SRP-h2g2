// External
import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

// Internal
import { LogicContext } from "@/contexts/LogicContext";
import DontPanic from "@/public/images/dont-panic.svg";
import Logo from "@/public/images/logo.svg";

// Siblings
import Button from "./components/Button";
import DeleteButton from "./components/DeleteButton";
import SearchButton from "./components/SearchButton";
import SpaceButton from "./components/SpaceButton";

const topRow = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const secondRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const thirdRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const lastRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Display = () => {
  const { isOpen } = useContext(LogicContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMousemove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const pointerX = (100 / rect.width) * (e.clientX - rect.left);
      const pointerY = (100 / rect.height) * (e.clientY - rect.top);

      ref.current!.style.setProperty("--pointerX", `${pointerX}%`);
      ref.current!.style.setProperty("--pointerY", `${pointerY}%`);
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={clsx(
          "keyboard-front-panel w-105 absolute right-0 flex h-128 flex-col items-center justify-between bg-lightPurple p-8 transition-transform duration-300 ease-in-out",
          {
            "is-open": isOpen,
          },
        )}
      >
        <div className="shiny-metal absolute -mt-8 h-full w-full" />

        <DontPanic className="w-full border-2 border-darkPurple fill-darkPurple p-2" />

        <div className="preserve-3d flex w-full flex-col gap-y-2 border-b-2 border-darkPurple">
          <div className="preserve-3d flex flex-col items-center gap-y-1">
            <div className="preserve-3d flex flex-wrap gap-x-1">
              {topRow.map((character) => (
                <Button key={`button-${character}`} character={character} />
              ))}
            </div>

            <div className="preserve-3d flex flex-wrap gap-x-1">
              {secondRow.map((character) => (
                <Button key={`button-${character}`} character={character} />
              ))}
            </div>

            <div className="preserve-3d flex flex-wrap gap-x-1">
              {thirdRow.map((character) => (
                <Button key={`button-${character}`} character={character} />
              ))}
            </div>

            <div className="preserve-3d flex flex-wrap gap-x-1">
              {lastRow.map((character) => (
                <Button key={`button-${character}`} character={character} />
              ))}
            </div>

            <div className="preserve-3d flex flex-wrap gap-x-1">
              <DeleteButton />

              <SpaceButton />

              <SearchButton />
            </div>
          </div>

          <Logo className="mb-2 w-8 fill-darkPurple"></Logo>
        </div>
      </div>

      <div
        className={clsx(
          "keyboard-top-panel metal w-105 absolute right-0 -z-10 h-8 bg-lightPurple transition-transform duration-300 ease-in-out",
          {
            "is-open": isOpen,
          },
        )}
      />

      <div
        className={clsx(
          "metal keyboard-right-panel absolute right-0 -z-10 flex h-128 w-8 bg-lightPurple transition-transform duration-300 ease-in-out",
          {
            "is-open": isOpen,
          },
        )}
      />

      <div
        className={clsx(
          "keyboard-bottom-panel metal w-105 absolute bottom-0 right-0 -z-10 h-8 bg-lightPurple transition-transform duration-300 ease-in-out",
          {
            "is-open": isOpen,
          },
        )}
      />
    </>
  );
};

export default Display;
