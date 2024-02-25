import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useGame } from "../contexts/gameContext";
import { useEffect } from "react";

function GameHeader() {
  const { category, word, incorrectGuess } = useGame();
  console.log(word);
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) navigate("/");
  }, [category, navigate]);

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-16">
        <Button type="small">
          <img src="../icon-menu.svg" alt="menu icon" />
        </Button>
        <h1 className="text-[8.8rem] leading-[120%] text-white">{category}</h1>
      </div>

      <div className="flex items-center gap-8">
        <progress
          max="8"
          value={8 - incorrectGuess}
          className="transition-all duration-500 ease-in-out [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#261676]"
        />
        <img
          src="../icon-heart.svg"
          alt="heart icon"
          className="h-[3.8rem] w-[4.3rem]"
        />
      </div>
    </header>
  );
}

export default GameHeader;
