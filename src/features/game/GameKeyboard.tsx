import { motion } from "framer-motion";
import { useGame } from "../contexts/gameContext";
import { Dispatch, SetStateAction, useEffect } from "react";

function GameKeyboard({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    setGuessedLetters,
    guessedLetters,
    word,
    setIncorrectGuess,
    incorrectGuess,
    setGameStatus,
  } = useGame();
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index),
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const letter = event.key.toUpperCase();

      if (!/^[a-zA-Z]+$/.test(event.key)) return;
      if (!guessedLetters.includes(letter)) {
        handleClick(letter);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [guessedLetters, word]);

  useEffect(() => {
    if (word) {
      const wordLetters = word
        .toUpperCase()
        .split("")
        .filter((letter) => letter !== " " && letter !== "'");

      const remainingLetters = wordLetters.filter(
        (letter) => !guessedLetters.includes(letter),
      );

      if (remainingLetters.length === 0) {
        setGameStatus("win");
        setTimeout(() => {
          setIsModalOpen(true);
        }, 1000);
      }

      if (incorrectGuess === 8) {
        setGameStatus("lose");
        setTimeout(() => {
          setIsModalOpen(true);
        }, 1500);
      }
    }
  }, [guessedLetters, word, incorrectGuess, setGameStatus, setIsModalOpen]);

  function handleClick(letter: string) {
    setGuessedLetters((prev: string[]) => [...prev, letter]);
    const isWordCorrect = word.toUpperCase().includes(letter.toUpperCase());

    if (!isWordCorrect) {
      setIncorrectGuess(incorrectGuess + 1);
    }
  }

  return (
    <div className="flex flex-wrap gap-[2.4rem] mobile:gap-5">
      {alphabet.map((letter) => (
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: guessedLetters.includes(letter) ? 1 : 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key={letter}
          className={`rounded-[2.4rem] bg-white px-[5.4rem] py-[1.2rem] text-[4.8rem] uppercase leading-[120%] tracking-[0.24rem] text-[#261676] disabled:bg-opacity-25 laptop:px-10 mobile:px-6  mobile:text-[2.4rem] ${guessedLetters.includes(letter) ? "cursor-not-allowed" : "hover:bg-[#2463ff] hover:text-white"}`}
          disabled={guessedLetters.includes(letter)}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
}

export default GameKeyboard;
