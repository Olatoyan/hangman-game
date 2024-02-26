import { useGame } from "../contexts/gameContext";
import DisplayWords from "./DisplayWords";

function DisplayWordContainer() {
  const { word, guessedLetters, incorrectGuess } = useGame();
  console.log(word);

  const words = word.split(" ");
  console.log(words);

  const formattedWords = word.split(" ").map((word) => {
    // Remove leading or trailing spaces
    return word.trim();
  });

  console.log({ formattedWords });

  return (
    <div className="flex flex-wrap justify-center gap-32 gap-y-8 mobile:gap-x-20">
      {words.map((word, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center justify-center gap-[1.6rem] mobile:gap-2"
        >
          {word.split("").map((letter, index) => (
            <DisplayWords
              key={index}
              letter={
                incorrectGuess === 8
                  ? letter
                  : guessedLetters.includes(letter.toUpperCase())
                    ? letter
                    : ""
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default DisplayWordContainer;
