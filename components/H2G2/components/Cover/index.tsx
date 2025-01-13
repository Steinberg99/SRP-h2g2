"use client";

// External
import clsx from "clsx";
import { useContext, useEffect, useRef } from "react";

// Internal
import { LogicContext } from "@/contexts/LogicContext";
import DontPanic from "@/components/DontPanic";
import Logo from "@/components/Logo";

const Cover = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const backsideRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, setIsOpen } = useContext(LogicContext);

  useEffect(() => {
    if (!ref.current) return;

    const handleMousemove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const pointerX = (100 / rect.width) * (e.clientX - rect.left);
      const pointerY = (100 / rect.height) * (e.clientY - rect.top);

      ref.current!.style.setProperty("--pointerX", `${pointerX}%`);
      ref.current!.style.setProperty("--pointerY", `${pointerY}%`);
      backsideRef.current!.style.setProperty("--pointerX", `${pointerX}%`);
      backsideRef.current!.style.setProperty("--pointerY", `${pointerY}%`);
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  return (
    <>
      <div
        ref={backsideRef}
        className={clsx(
          "front-panel-backside shiny-leather absolute h-128 w-128 cursor-pointer bg-darkestPurple transition-transform duration-500 ease-in-out",
          { "is-open": isOpen },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="note paper relative left-1/4 top-1/4 flex h-64 w-64 flex-col gap-x-8 bg-paper p-8"
          style={{ transform: "rotateY(180deg)", rotate: "11deg" }}
        >
          <span>Entries to remember!</span>

          <ul>
            <li>The Earth</li>
            <li>Vogon</li>
            <li>Marvin</li>
            <li>Babel Fish</li>
          </ul>
        </div>

        <div className="absolute left-1/4 top-[48px] h-32 w-12 rotate-[55deg] bg-purple opacity-25" />

        <div className="absolute right-[96px] top-[112px] h-24 w-12 rotate-[305deg] bg-purple opacity-25" />

        <div className="absolute bottom-[96px] left-[76px] h-32 w-12 rotate-[315deg] bg-purple opacity-25" />

        <div className="absolute bottom-[64px] right-[156px] h-32 w-12 rotate-[75deg] bg-purple opacity-25" />
      </div>

      <div
        ref={ref}
        className={clsx(
          "front-panel shiny-leather absolute flex h-128 w-128 cursor-pointer items-center justify-center overflow-hidden bg-darkestPurple transition-transform duration-500 ease-in-out",
          { "is-open": isOpen },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <DontPanic className="w-64 border border-darkPink p-2" />
      </div>

      <div className="top-panel leather absolute h-16 w-128 bg-darkestPurple" />

      <div className="left-panel leather absolute flex h-128 w-16 items-end justify-center bg-darkestPurple pb-8">
        <Logo className="h-auto w-8" />
      </div>

      <div className="bottom-panel leather absolute bottom-0 h-16 w-128 bg-darkestPurple" />
    </>
  );
};

export default Cover;
