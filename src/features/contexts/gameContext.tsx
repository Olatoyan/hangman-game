import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type State = {
  word: string;
  incorrectGuess: number;
  setIncorrectGuess: (number: number) => void;
  category: string;
  setCategory: (category: string) => void;
  gameStatus: "playing" | "win" | "lose";
  setGameStatus: (gameStatus: "playing" | "win" | "lose") => void;
  guessedLetters: string[];
  setGuessedLetters: (value: SetStateAction<string[]>) => void;
  handlePlayAgain: () => void;
  handleNewCategory: () => void;
};

const GameContext = createContext<State | null>(null);

function GameProvider({ children }: { children: ReactNode }) {
  const [word, setWord] = useState("");
  const [incorrectGuess, setIncorrectGuess] = useState(0);
  const [chosenWords, setChosenWords] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"playing" | "win" | "lose">(
    "playing",
  );

  const navigate = useNavigate();

  function handlePlayAgain() {
    const tempCategory = category;
    setCategory("a");
    setTimeout(() => {
      setCategory(tempCategory);
    }, 100);
    setWord("");
    setIncorrectGuess(0);
    setGuessedLetters([]);
    setGameStatus("playing");
  }

  function handleNewCategory() {
    setWord("");
    setIncorrectGuess(0);
    setGuessedLetters([]);
    setGameStatus("playing");
    navigate("/game");
  }

  useEffect(() => {
    if (!category) return;

    async function fetchAndSelectWord() {
      const response = await fetch("../data.json");
      const data = await response.json();
      const categories = data.categories[category];

      const availableWords = categories.filter(
        (word: { name: string }) => !chosenWords.includes(word.name),
      );

      if (availableWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const selectedWord = availableWords[randomIndex];

        setWord(selectedWord.name);
        setChosenWords((prev) => [...prev, selectedWord.name]);
      } else {
        console.log("No available words left in this category.");
      }
    }

    fetchAndSelectWord();
  }, [category]);

  return (
    <GameContext.Provider
      value={{
        word,
        incorrectGuess,
        setIncorrectGuess,
        category,
        setCategory,
        guessedLetters,
        setGuessedLetters,
        gameStatus,
        setGameStatus,
        handlePlayAgain,
        handleNewCategory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { GameProvider, useGame };
