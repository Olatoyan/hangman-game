import { useGame } from "../contexts/gameContext";
import DisplayWords from "./DisplayWords";

function DisplayWordContainer() {
  const { word, guessedLetters, incorrectGuess } = useGame();
  console.log(word);

  const words = word.split(" ");
  console.log(words);

  return (
    <div className="flex flex-wrap justify-center gap-[1.6rem]">
      {words.map((word, index) => (
        <div key={index} className="flex items-center gap-[1.6rem]">
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
          {index !== words.length - 1 && (
            <span className="rounded-[4rem] px-[4.4rem] py-[1.2rem] text-[8.8rem] uppercase leading-[120%] text-white">
              &nbsp;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplayWordContainer;
