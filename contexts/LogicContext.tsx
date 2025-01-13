"use client";

// External
import { createContext, ReactNode, useEffect, useState } from "react";

export const LogicContext = createContext({
  isOn: false,
  isOpen: false,
  messages: [] as string[],
  pressedCharacters: "",
  search: (_query: string) => {},
  setIsOn: (_isOn: boolean) => {},
  setIsOpen: (_isOpen: boolean) => {},
  setMessages: (_messages: string[] | ((prev: string[]) => string[])) => {},
  setPressedCharacters: (
    _pressedCharacters: string | ((prev: string) => string),
  ) => {},
});

const LogicProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pressedCharacters, setPressedCharacters] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isOn, setIsOn] = useState(false);

  const getEntry = (query: string) => {
    switch (query) {
      case "THE EARTH":
        return "MOSTLY HARMLESS.";
      case "VOGON":
        return "A RUTHLESS, ARROGANT SPECIES THAT ENFORCES GALACTIC BUREAUCRACY WITH UNRELENTING PRECISION. ALSO, VERY BAD POETS. USUALLY DISCUSSING PAPERWORK WHILE RISKING THE LIVES OF THOSE WHO CAN'T ESCAPE THEIR SHIP'S SHODDY POETRY READINGS.";
      case "PAN GALACTIC GARGLE BLASTER":
        return "PAN-GALACTIC GARGLE BLASTER: THE MOST POWERFUL AND DANGEROUS ALCOHOLIC DRINK IN THE UNIVERSE. TYPICALLY USED BY THOSE WHO WANT TO EXPERIENCE THE 'FEELING OF A LEMON BEING SQUASHED INTO YOUR EYE.' LITERALLY COULD MELT YOUR FACE OFF, BUT AT LEAST YOU'LL HAVE A GOOD TIME TRYING.";
      case "HITCHHIKER":
        return "HITCHHIKER: A VERY UNSUCCESSFUL PERSON WHO CARRIES A TOWEL AND HOPES FOR A RIDE THROUGH THE UNIVERSE. USUALLY FOUND IN THE NEAREST GALACTIC PUB, TRYING TO EXPLAIN WHY 'DON'T PANIC' IS THE MOST IMPORTANT PIECE OF ADVICE EVER GIVEN.";
      case "ARTHUR DENT":
        return "A BRITISH MAN WHO FINDS HIMSELF UNWILLINGLY TRAPPED IN A SERIES OF GALACTIC ADVENTURES. TENDS TO UNDERSTAND LITTLE AND PANICS EVEN LESS. BEST KNOWN FOR TRYING TO GET HOME AND ALWAYS FAILING AT THE WORST POSSIBLE MOMENT.";
      case "ZAPHOD BEEBLEBROX":
        return "A TWO-HEADED, THREE-ARMED, OVERCONFIDENT SPACE PRINCE WHO THINKS HE’S THE MOST IMPORTANT BEING IN THE UNIVERSE. USUALLY SEEN WITH A COCKY SMIRK AND A LACK OF ACTUAL CONCERN FOR ANYONE ELSE'S WELL-BEING.";
      case "MARVIN":
        return "A ROBOT WITH A BRAIN THE SIZE OF A PLANET AND A PERSONALITY THAT COULD ONLY BE DESCRIBED AS DEEPLY DEPRESSING. ALWAYS READY TO REMIND YOU HOW MISERABLE LIFE IS, BUT ALSO SORT OF UNINTENTIONALLY FUNNY BECAUSE OF IT.";
      case "BABEL FISH":
        return "A SMALL, YELLOW CREATURE THAT CAN TRANSLATE ANY LANGUAGE IN THE UNIVERSE BY PLACING ITSELF IN YOUR EAR. CONVENIENT, BUT NOT PARTICULARLY ATTRACTIVE. UNFORTUNATELY, IT CAN’T HELP YOU UNDERSTAND THE INTERNAL POLITICS OF YOUR FAMILY'S HOLIDAY GATHERINGS.";
      case "GUARDBOT":
        return "A TERMINALLY STUPID AND OVERLY AGGRESSIVE SECURITY ROBOT, MAINLY DESIGNED TO YELL 'STOP RIGHT THERE!' AND LOOK MENACINGLY WHILE MISSING THE ENTIRE POINT OF A SITUATION. MOSTLY USELESS, EXCEPT FOR CHEERFUL SPAMMY ANNOUNCEMENTS.";
      default:
        return "ENTRY NOT FOUND. DON'T PANIC. BUT MAYBE A TOWEL WOULD HELP.";
    }
  };

  const search = (query: string) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Pad single digit values with a leading zero
    const hoursString = hours < 10 ? "0" + hours : hours;
    const minutesString = minutes < 10 ? "0" + minutes : minutes;
    const secondsString = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hoursString}:${minutesString}:${secondsString}`;

    setMessages((prev) => [
      ...prev,
      `${getEntry(query)} QUERIED AT ${timeString}.`,
    ]);
  };

  return (
    <LogicContext.Provider
      value={{
        isOn,
        isOpen,
        messages,
        pressedCharacters,
        search,
        setIsOn,
        setIsOpen,
        setMessages,
        setPressedCharacters,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};

export default LogicProvider;
