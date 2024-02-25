import { useGame } from "../contexts/gameContext";
import DisplayWords from "./DisplayWords";

function DisplayWordContainer() {
  const { word, guessedLetters, incorrectGuess } = useGame();
  console.log(word);

  return (
    <div className="flex flex-wrap justify-center gap-[1.6rem]">
      {word.split("").map((letter, index) => (
        <>
          {letter !== " " ? (
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
          ) : (
            <span
              key={index}
              className="rounded-[4rem] px-[6.4rem] py-[1.2rem] text-[8.8rem] uppercase leading-[120%] text-white"
            >
              &nbsp;
            </span>
          )}
        </>
      ))}
    </div>
  );
}

export default DisplayWordContainer;
