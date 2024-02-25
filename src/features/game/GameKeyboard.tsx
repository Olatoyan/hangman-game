import { motion } from "framer-motion";
import { useGame } from "../contexts/gameContext";

function GameKeyboard() {
  const {
    setGuessedLetters,
    guessedLetters,
    word,
    setIncorrectGuess,
    incorrectGuess,
  } = useGame();
  const alphabet = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index),
  );

  function handleClick(letter: string) {
    setGuessedLetters([...guessedLetters, letter]);
    const isWordCorrect = word.toUpperCase().includes(letter.toUpperCase());

    if (!isWordCorrect) {
      setIncorrectGuess(incorrectGuess + 1);
    }
  }

  return (
    <div className="flex flex-wrap gap-[2.4rem]">
      {alphabet.map((letter) => (
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: guessedLetters.includes(letter) ? 1 : 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key={letter}
          className={`rounded-[2.4rem] bg-white px-[5.4rem] py-[1.2rem] text-[4.8rem] uppercase leading-[120%] tracking-[0.24rem] text-[#261676]  disabled:bg-opacity-25 ${guessedLetters.includes(letter) ? "cursor-not-allowed" : "hover:bg-[#2463ff] hover:text-white"}`}
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
