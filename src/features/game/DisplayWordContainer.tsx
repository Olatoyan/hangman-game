import { useGame } from "../contexts/gameContext";
import DisplayWords from "./DisplayWords";

function DisplayWordContainer() {
  const { word, guessedLetters, incorrectGuess } = useGame();

  const words = word.split(" ");

 

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
