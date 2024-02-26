import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useGame } from "../contexts/gameContext";
import { Dispatch, SetStateAction, useEffect } from "react";

function GameHeader({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { category, incorrectGuess } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) navigate("/");
  }, [category, navigate]);

  function handleClick() {
    setIsModalOpen((prev) => !prev);
  }
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-16 mobile:gap-6">
        <Button type="small" onClick={handleClick}>
          <img src="../icon-menu.svg" alt="menu icon" />
        </Button>
        <h1 className="text-[8.8rem] leading-[120%] text-white laptop:text-[4.8rem]">
          {category}
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <progress
          max="8"
          value={8 - incorrectGuess}
          className="h-[1.3rem] transition-all duration-500 ease-in-out mobile:w-[6rem] [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:p-[2px_6px] mobile:[&::-webkit-progress-bar]:p-[2px_3px] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#261676]"
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
