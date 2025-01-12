// External
import { useContext, useEffect, useRef, useState } from "react";
import TypeIt from "typeit-react";

// Internal
import { LogicContext } from "@/contexts/LogicContext";
import Typewriter from "./components/TypeWriter";

const Display = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const displayRef = useRef<HTMLDivElement | null>(null);
  const { messages, pressedCharacters } = useContext(LogicContext);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    if (!ref.current) return;

    const handleMousemove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const pointerX = (100 / rect.width) * (e.clientX - rect.left);
      const pointerY = (100 / rect.height) * (e.clientY - rect.top);

      ref.current!.style.setProperty("--pointerX", `${pointerX}%`);
      ref.current!.style.setProperty("--pointerY", `${pointerY}%`);

      const displayRect = displayRef.current!.getBoundingClientRect();
      const displayPointerX =
        (100 / displayRect.width) * (e.clientX - displayRect.left);
      const displayPointerY =
        (100 / displayRect.height) * (e.clientY - displayRect.top);

      displayRef.current!.style.setProperty(
        "--pointerX",
        `${displayPointerX}%`,
      );
      displayRef.current!.style.setProperty(
        "--pointerY",
        `${displayPointerY}%`,
      );
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1]);
    }
  }, [messages]);

  return (
    <>
      <div
        ref={ref}
        className="shiny-metal absolute -z-10 flex h-128 w-128 items-center justify-center overflow-hidden bg-purple p-8 transition-transform duration-300 ease-in-out"
      >
        <div
          ref={displayRef}
          className="display shiny-display relative z-10 flex h-full w-full flex-col justify-end overflow-hidden border-4 border-darkPurple bg-green p-4"
        >
          {/* Render previously sent messages */}
          {messages.slice(0, -1).map((message, index) => (
            <span key={`message-${index}`}>{message}</span>
          ))}

          <Typewriter
            key={Math.random + lastMessage}
            text={lastMessage}
            delay={50}
          />

          <span className="blinking-cursor">{pressedCharacters}</span>
        </div>
      </div>

      <div className="display-right-panel metal absolute right-0 h-128 w-8 bg-purple" />
    </>
  );
};

export default Display;
